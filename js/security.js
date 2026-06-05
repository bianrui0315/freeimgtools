let configPromise;

export async function getSecurityConfig() {
  if (!configPromise) {
    configPromise = fetch('/api/security-config')
      .then(async res => {
        const data = await res.json().catch(() => ({}));
        return res.ok ? data : {};
      })
      .catch(() => ({}));
  }
  return configPromise;
}
