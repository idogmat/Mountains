var clickMenu = document.querySelector('.tablet .tablet__menu'),
    closeMenu = document.querySelector('.mini-menu__cross .tablet__menu'),
    tabletMenu = document.querySelector('.mini-menu'),
    logoOff = document.querySelector('.header-content'),
    scrollPinOff = document.querySelector('.scroll-pin');


clickMenu.addEventListener('click', function (e) {
    e.preventDefault();
    if (tabletMenu.style.display = 'none') {
        tabletMenu.style.display = 'flex';
        logoOff.style.display = 'none';
        scrollPinOff.style.display = 'none';
        document.body.style.overflow = 'hidden';
    } else {
        tabletMenu.style.display = 'none';
    }
});
closeMenu.addEventListener('click', function (e) {
    e.preventDefault();
    if (tabletMenu.style.display = 'flex') {
        tabletMenu.style.display = 'none';
        logoOff.style.display = 'flex';
        scrollPinOff.style.display = 'flex';
        document.body.style.overflow = '';
    } else {
        tabletMenu.style.display = 'felx';
    }
});