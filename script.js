// =====================================
// Burger toggle + animation
// =====================================
const burger = document.getElementById("burgerBtn");
const menu = document.getElementById("navMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("is-active");
});

// =====================================
// Navbar scroll shadow
// =====================================
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});