
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

document.addEventListener('click', function (e) {
    var menu = document.querySelector('.navbar-burger');
    var button = document.querySelector('#burger-menu-button');

    if (!menu.contains(e.target) && !button.contains(e.target)) {
        var checkbox = document.getElementById('burger-menu-button');
        checkbox.checked = false;

        darkening.forEach(function(item) {
            toggleCSSProperty(item, 'filter', 'brightness(0)');
        }); 
    }
});

const burger = document.getElementById("burger-menu-button");

burger.addEventListener('click', () => {

    if (typeof navbarMenu.style.backdropFilter !== 'undefined') {
        darkening.forEach(function(item) {
            toggleCSSProperty(item, 'filter', 'brightness(0.4)');
        });          
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

