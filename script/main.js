const burger = document.querySelector('.burger');
const tabletNav = document.querySelector('.tablet-nav');
const closeButton = document.querySelector('.close-button');

burger.addEventListener('click', function() {
    burger.classList.add('hide');
    tabletNav.classList.add('active');
});

closeButton.addEventListener('click', function () {
    burger.classList.remove('hide');
    tabletNav.classList.remove('active');
});

const headerLogin = document.querySelector('.header-login');
const login = document.querySelector('.login');
const loginCloseButton = document.querySelector('.login-close-button');

headerLogin.addEventListener('click', function() {
    login.classList.add('active');
    document.body.classList.add('no-scroll')
})

loginCloseButton.addEventListener('click', function() {
    login.classList.remove('active');
    document.body.classList.remove('no-scroll')
})
