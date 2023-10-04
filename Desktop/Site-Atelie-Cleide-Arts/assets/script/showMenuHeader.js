document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#menu');
    const NavMenu = document.querySelector('#nav-menu');
    const menuItems = document.querySelectorAll('.nav-item a');

    menu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
        NavMenu.classList.toggle('ativo');
    });

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.remove('ativo');
            NavMenu.classList.remove('ativo');
        });
    });
});

