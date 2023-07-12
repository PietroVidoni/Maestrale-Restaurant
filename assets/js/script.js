/* Highlights the section you are looking at */
const pageSections = document.getElementsByTagName('section')

function highlightCurrentSection() {
  for (let i = 0; i < pageSections.length; i++) {
    var rect = pageSections.item(i).getBoundingClientRect();
    let screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
    
    // Doesn't check the remaining section if the current one is out of view
    if (rect.bottom < 0 || rect.top - screenHeight >= 0) {
      continue
    }
    
    let isVisible = (rect.top - (screenHeight / 1.5) < 0) || (rect.top - (screenHeight / 1.5) < 0)
    pageSections.item(i).style.filter = `brightness(${isVisible ? '1' : '0.4'})`
  }
}

window.addEventListener('load', highlightCurrentSection)
window.addEventListener('scroll', highlightCurrentSection)

function toggleShape(link) {
    var links = document.querySelectorAll('.navbar-item');

    links.forEach(link => {
        link.classList.remove('button-highlight');
        link.style.color = 'var(--light-font-color)';
    });

    link.classList.add('button-highlight');
    link.style.color = 'var(--dark-font-color)';
}

const navbar = document.querySelector('.navbar');

let prevScrollPos = window.scrollY;

const handleScroll = () => {
    let isVisible = prevScrollPos > window.scrollY || window.scrollY <= 0

    navbar.classList.remove(isVisible ? 'navbar-hidden' : 'navbar-visible');
    navbar.classList.add(isVisible ? 'navbar-visible' : 'navbar-hidden');

    prevScrollPos = window.scrollY;
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
        menuState = !menuState;

        darkening.forEach(item => toggleCSSProperty(item, 'filter', 'brightness(0.4)'));
    }
});

document.addEventListener('click', e => {
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