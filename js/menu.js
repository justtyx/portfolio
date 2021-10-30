const navToggle = document.querySelector('.hamburger');
const menuToggle = document.querySelector('#menu-items');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});