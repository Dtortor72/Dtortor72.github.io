// Ocultar el mensaje de bienvenida al mover el ratón
window.addEventListener("mousemove", () => {
  const banner = document.getElementById("bienvenida");
  if (banner) {
    banner.style.transition = "opacity 1s";
    banner.style.opacity = "0";
    setTimeout(() => banner.remove(), 1000);
  }
}, { once: true });
