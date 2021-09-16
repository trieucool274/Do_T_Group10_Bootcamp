// hamburger menu starts here
let menubutton = document.querySelector('#menubutton');
let menu = document.querySelector('.navCon');

function showMenu() {
    menu.classList.toggle('slideToggle');
}

menubutton.addEventListener('click', showMenu, true);
// hamburger menu ends heres