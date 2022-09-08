let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('uil-bars')
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('uil-bars');
    navbar.classList.remove('active');
}