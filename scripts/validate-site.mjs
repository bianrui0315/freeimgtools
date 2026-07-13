import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignoredDirs = new Set([".git", "node_modules", ".wrangler", ".vercel"]);
const errors = [];

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) files.push(...walk(path.join(dir, entry.name)));
    } else {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function rel(file) {
  return path.relative(root, file);
}

function fail(file, message) {
  errors.push(`${file}: ${message}`);
}

function hasLocalTarget(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || clean === "/") return existsSync(path.join(root, "index.html"));
  if (clean.startsWith("/api/")) return true;
  if (!clean.startsWith("/")) return false;

  const normalized = clean.replace(/^\/+/, "");
  const candidates = [
    path.join(root, normalized),
    path.join(root, `${normalized}.html`),
    path.join(root, normalized, "index.html"),
  ];
  return candidates.some(existsSync);
}

const files = walk(root);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const jsFiles = files.filter((file) => file.endsWith(".js"));

JSON.parse(readFileSync(path.join(root, "package.json"), "utf8"));

for (const file of jsFiles) {
  const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (result.status !== 0) fail(rel(file), result.stderr.trim() || "JavaScript syntax check failed");
}

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const linkableHtml = html
    .replace(/<pre[\s\S]*?<\/pre>/gi, "")
    .replace(/<code[\s\S]*?<\/code>/gi, "");
  const name = rel(file);
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  const canonicalCount = (html.match(/rel=["']canonical["']/gi) || []).length;

  if (!/<title>[^<]{10,}<\/title>/i.test(html)) fail(name, "missing useful title");
  if (!/<meta\s+name=["']description["'][^>]+content=["'][^"']{40,}["']/i.test(html)) fail(name, "missing useful meta description");
  if (h1Count !== 1) fail(name, `expected exactly one h1, found ${h1Count}`);
  if (canonicalCount !== 1) fail(name, `expected exactly one canonical, found ${canonicalCount}`);

  const hrefs = [...linkableHtml.matchAll(/\shref=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const href of hrefs) {
    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("#")
    ) {
      continue;
    }
    if (href.startsWith("/") && !hasLocalTarget(href)) fail(name, `broken internal href: ${href}`);
  }
}

const sitemapPath = path.join(root, "sitemap.xml");
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, "utf8");
  if (!sitemap.includes("<urlset")) fail("sitemap.xml", "missing urlset");
  const locs = [...sitemap.matchAll(/<loc>https:\/\/freeimgtools\.net([^<]*)<\/loc>/g)].map((match) => match[1]);
  if (locs.length === 0) fail("sitemap.xml", "no freeimgtools.net URLs found");
  for (const loc of locs) {
    if (!hasLocalTarget(loc)) fail("sitemap.xml", `missing page for sitemap URL: ${loc}`);
  }
}

const redirectsPath = path.join(root, "_redirects");
if (existsSync(redirectsPath)) {
  const lines = readFileSync(redirectsPath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
  for (const line of lines) {
    const parts = line.split(/\s+/);
    if (parts.length < 2) fail("_redirects", `invalid redirect line: ${line}`);
    if (parts[1]?.startsWith("/") && !hasLocalTarget(parts[1])) fail("_redirects", `missing redirect target: ${parts[1]}`);
  }
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML files, ${jsFiles.length} JS files, sitemap, and redirects.`);
