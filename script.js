const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  const open = menuLinks.classList.toggle('active');
  document.body.classList.toggle('menu-open', open);
});

menuLinks.querySelectorAll('.navbar__links').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Fade-in animation
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.4
});

faders.forEach((el) => observer.observe(el));


const form = document.querySelector("form");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

if (form) {
  form.addEventListener("submit", function(e) {

    if (email.value.trim() === "" && phone.value.trim() === "") {

      e.preventDefault();

      alert("Please provide either an email address or phone number.");

      email.style.border = "2px solid red";
      phone.style.border = "2px solid red";

    }
  });
}