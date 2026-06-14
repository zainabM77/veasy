const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const overlay = document.getElementById('nav-overlay');

let scrollPos = 0;

function openMenu() {
  scrollPos = window.scrollY;
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.style.height = '100%';
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';
  menu.classList.add('is-active');
  menuLinks.classList.add('active');
  if (overlay) overlay.classList.add('active');
}

function closeMenu() {
  document.documentElement.style.overflow = '';
  document.documentElement.style.height = '';
  document.body.style.overflow = '';
  document.body.style.height = '';
  window.scrollTo(0, scrollPos);
  menu.classList.remove('is-active');
  menuLinks.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

menu.addEventListener('click', function () {
  menuLinks.classList.contains('active') ? closeMenu() : openMenu();
});

if (overlay) overlay.addEventListener('click', closeMenu);

menuLinks.querySelectorAll('.navbar__links').forEach(link => {
  link.addEventListener('click', closeMenu);
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