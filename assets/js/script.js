/* Navbar hamburger */
const burgerButton = document.getElementsByClassName('navbar-burger').item(0)
const navbarLinks = document.getElementById('navbar-links')

burgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('is-hidden')
})

/* Navbar highlight */

// Pietro fix this
const navbarButtons = Array.from(navbarLinks.getElementsByTagName('a'))
navbarButtons.forEach(btn => {
    if (window.location.href.includes(btn.getAttribute('href'))) {
        // Add the class to the item
        btn.classList.add('active');
    }
})

/* Navbar scroll */
let previousScrollPosition = window.scrollY
const navbar = document.getElementsByClassName('navbar').item(0)

window.addEventListener('scroll', () => {
    if (window.scrollY > previousScrollPosition) {
        navbar.classList.add('hide-navbar')
    } else {
        navbar.classList.remove('hide-navbar')

    }


    previousScrollPosition = window.scrollY
})