(() => {
  const button = document.querySelector("[data-contact-email]");
  if (!button) return;

  button.addEventListener("click", () => {
    const address = ["admin", "freeimgtools.net"].join("@");
    window.location.href = `mailto:${address}`;
  });
})();
