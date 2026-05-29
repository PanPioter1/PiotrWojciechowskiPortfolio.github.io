const menu = document.getElementById('menu');
const sideNav = document.getElementById('sideNav');
let navmenu = 0;

function openMenu(animated = true) {
    menu.style.transform = 'rotate(90deg)';
    menu.style.transition = animated ? 'transform 0.8s linear' : 'transform 0s linear';
    sideNav.style.width = '250px';
    sideNav.style.transition = animated ? '0.8s linear' : 'transform 0s linear';
    navmenu = 1;
    localStorage.setItem('sideNavOpen', 'true');
}

function closeMenu(animated = true) {
    menu.style.transform = 'rotate(0deg)';
    menu.style.transition = animated ? 'transform 0.8s linear' : 'transform 0s linear';
    sideNav.style.width = '0px';
    sideNav.style.transition = animated ? '0.8s linear' : 'transform 0s linear';
    navmenu = 0;
    localStorage.setItem('sideNavOpen', 'false');
}

function toggleMenu() {
    if (navmenu === 0) {
        openMenu(true);
    } else {
        closeMenu(true);
    }
}

window.onload = function() {
    const sideNavOpen = localStorage.getItem('sideNavOpen');
    if (sideNavOpen === 'true') {
        openMenu(false);
    } else {
        closeMenu(false);
    }
}