
// Navigation Menu Button Toggle
const navToggleElement = document.querySelector('.nav-btn');

// On click of the Menu Button show the navigation menu
navToggleElement.onclick = () => {
    navList = document.querySelector('nav ul');
    // https://dommagnifi.co/2019-05-06-basic-class-toggle-with-vanilla-js-es6/
    navList.classList.toggle('toggle');
}
