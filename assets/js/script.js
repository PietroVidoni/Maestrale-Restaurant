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
    pageSections.item(i).style.filter = isVisible ? ``: `brightness(0.4)`
  }
}

window.addEventListener('load', highlightCurrentSection)
window.addEventListener('scroll', highlightCurrentSection)

window.addEventListener("load", () => {
    var links = document.querySelectorAll('.navbar-item');

    var url = window.location.href;
    var pageName = url.split("?page=")[1];

    links.forEach(link => {
        var itemName = link.innerHTML.replace(/\s/g, "");

        if (pageName.includes(itemName.toLowerCase())) {
            link.classList.add('button-highlight');
            return;
        }
    })
})

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

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'assets/php/newsLetter.php', true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            var checkIcon = document.querySelector(".has-icons-right .fa-check");
            var subscribeButton = document.getElementById("subscribe-button");

            checkIcon.classList.add("has-text-success");
            subscribeButton.style.display = "none";
        } else {
            console.error('Errore nella richiesta AJAX');
        }
    };

    xhr.send(new FormData(this));
});
/*
document.getElementById('message-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'assets/php/mail.php', true);

    
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            console.log("here");
        } else {
            console.error('Errore nella richiesta AJAX');
        }
    };

    xhr.send(new FormData(this));
});
*/