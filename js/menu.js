const menuBtn = document.querySelector('.hamburger');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        // menuBtn.classList.add('open');
        document.querySelector('nav > ul.menu-items#menu-items').style.display = 'flex';
        document.querySelector('nav > ul.menu-items').classList.add('slide-in');
        menuOpen = true;
    } else {
        document.querySelector('nav > ul.menu-items').classList.add('slide-out');
        console.log('closed');
        setTimeout(()=> {
            document.querySelector('nav > ul.menu-items#menu-items').style.display = 'none';
        }, 200);
        menuOpen = false;
    }
});