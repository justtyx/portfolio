const menuBtn = document.querySelector('.hamburger');
const hamburgerFirst = document.querySelector('.line:first-child');
const  hamburgerSecond = document.querySelector('.line:nth-child(2)');
const  hamburgerThird = document.querySelector('.line:last-child');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        document.querySelector('nav > ul.menu-items#menu-items').style.display = 'flex';
        document.querySelector('nav > ul.menu-items').classList.add('slide-in');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        document.querySelector('nav > ul.menu-items').classList.add('slide-out');
        console.log('closed');
        setTimeout(()=> {
            document.querySelector('nav > ul.menu-items#menu-items').style.display = 'none';
        }, 200);
        menuOpen = false;
    }
});