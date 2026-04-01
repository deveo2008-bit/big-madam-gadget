// CHANGE TO YOUR NUMBER
const phoneNumber = "2348012345678";

function buyNow(phone) {
  let message = `Hello, I want to buy ${phone}`;
  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}