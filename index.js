function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

// CHANGE THIS NUMBER
const phoneNumber = "2348039280804";

function buyNow(product) {
  let message = `Hello, I want to buy ${product}`;
  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function contactWhatsApp() {
  let message = "Hello, I want to make an inquiry";
  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
let cart = [];
let total = 0;

function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

function addToCart(name, price) {
  cart.push({name, price});
  total += price;

  updateCart();
}

function updateCart() {
  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₦${item.price}`;
    list.appendChild(li);
  });

  document.getElementById("total").textContent = total;
  document.getElementById("cart-count").textContent = cart.length;
}

// SEARCH FILTER
function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let title = card.querySelector("h3").textContent.toLowerCase();

    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

<button class="menu-btn" onclick="toggleMenu()">☰</button>