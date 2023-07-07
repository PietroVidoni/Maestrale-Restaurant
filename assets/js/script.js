
function toggleShape(link) {
    var links = document.querySelectorAll('.navbar-item');

    links.forEach(function (link) {
        link.classList.remove('button-highlight');
        link.style.color = 'var(--light-font-color)';
    });

    link.classList.add('button-highlight');
    link.style.color = 'var(--dark-font-color)';
}

const navbar = document.querySelector('.navbar');

let prevScrollPos = window.pageYOffset;

const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

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
const button = document.querySelector('#burger-menu-button');
const checkbox = document.getElementById('burger-menu-button');
const burger = document.getElementById("burger-menu-button");

let menuState = false;

burger.addEventListener('click', () => {
    if (typeof CSS.supports('backdrop-filter', 'blur(0)')) {
        menuState = menuState ? false : true;

        darkening.forEach(item => toggleCSSProperty(item, 'filter', 'brightness(0.4)'));
    }
});

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !button.contains(e.target) && menuState) {
        checkbox.checked = false;

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
