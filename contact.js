function contactWhatsApp() {
  let message = "Hello, I want to make an inquiry";
  let url = `https://wa.me/2348039280804?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}