// Dark Mode toggle with persistence
const darkToggle = document.getElementById("darkToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  darkToggle.textContent = "☀️";
}

// Toggle theme
darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    darkToggle.textContent = "🌙";
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
