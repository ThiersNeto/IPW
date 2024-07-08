

document.addEventListener("DOMContentLoaded", function() {
  const themeButton = document.getElementById("theme-button");

  if (themeButton) {
      themeButton.addEventListener("click", function() {
          document.body.classList.toggle("dark-theme");
      });
  }

  const form = document.getElementById("opinion-form");

  if (form) {
      form.addEventListener("submit", function(event) {
          event.preventDefault();
          alert("Obrigado pela sua opinião!");
      });
  }

  // Script para alternar o menu hamburger
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", function() {
      navList.classList.toggle("active");
  });
});
