const navToggle = document.querySelector('.hamburger');
const menuToggle = document.querySelector('#menu-items');
const menuLines = document.querySelectorAll('.line');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navToggle.addEventListener('mouseover', () => {
    menuLines[0].style.background = '#131313';
    menuLines[1].style.background = '#131313';
    menuLines[2].style.background = '#131313';
})

navToggle.addEventListener('mouseout', () => {
    menuLines[0].style.background = 'transparent';
    menuLines[1].style.background = 'transparent';
    menuLines[2].style.background = 'transparent';
})