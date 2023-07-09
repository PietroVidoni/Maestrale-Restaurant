
function toggleShape(link) {
    var links = document.querySelectorAll('.navbar-item');

    links.forEach(function (link) {
        link.classList.remove('button-highlight');
        link.style.color = 'var(--light-font-color)';
    });

    link.classList.add('button-highlight');
    link.style.color = 'var(--dark-font-color)';
}

/* Scroll bar/navbar animation*/

const navbar = document.querySelector('.navbar');

let prevScrollPos = window.scrollY;

const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
    } else {
        navbar.classList.remove('navbar-visible');
        navbar.classList.add('navbar-hidden');
    }

    prevScrollPos = currentScrollPos;
};

window.addEventListener('scroll', handleScroll);

/* Navbar hamburger */

const darkening = document.querySelectorAll('.darkening');
const menu = document.querySelector('.navbar-burger');
const checkbox = document.getElementById('burger-menu-button');
const burger_menu = document.getElementById("navbarBurgerMenu");

let menuState = false;

checkbox.addEventListener('click', () => {
    if (typeof CSS.supports('backdrop-filter', 'blur(0)')) {
        menuState = menuState ? false : true;

        burger_menu.style.left = menuState ? "0%" : "-100%";
        
        darkening.forEach(item => toggleCSSProperty(item, 'filter', 'brightness(0.4)'));
    }
});

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !checkbox.contains(e.target) && menuState) {
        checkbox.checked = false;
        menuState = false;
        burger_menu.style.left = "-100%";
        darkening.forEach(item => toggleCSSProperty(item, 'filter', 'brightness(1)'));
    }
});

function toggleCSSProperty(element, property, value) {
    const currentValue = element.style.getPropertyValue(property);

    if (currentValue) {
        element.style.removeProperty(property);
    } else {
        element.style.setProperty(property, value);
    }
}
