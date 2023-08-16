/**
 * @fileoverview Manages functionality for a responsive navbar, highlighting active links, and scroll behavior.
 * This script handles the hamburger button interaction, highlights active links in the navbar,
 * and controls the behavior of the navbar on scroll.
 * 
 * @module NavbarManager
 */

/**
 * Selects the hamburger button element from the DOM.
 * 
 * @constant {HTMLElement}
 */
const burgerButton = document.getElementsByClassName('navbar-burger').item(0);

/**
 * Selects the navbar links container from the DOM.
 * 
 * @constant {HTMLElement}
 */
const navbarLinks = document.getElementById('navbar-links');

/**
 * Handles the click event for the hamburger button.
 * Toggles the visibility of the navbar links when the button is clicked.
 * 
 * @function
 * @returns {void}
 */
burgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('is-hidden');
});

/* Navbar highlight */

// Highlights the active link in the navbar
const navbarButtons = Array.from(navbarLinks.getElementsByTagName('a'));
navbarButtons.forEach(btn => {
    if (window.location.href.includes(btn.getAttribute('href'))) {
        btn.classList.add('active');
    }
});

/* Navbar scroll */

/**
 * Tracks the previous scroll position to control navbar behavior.
 * 
 * @type {number}
 */
let previousScrollPosition = window.scrollY;

/**
 * Selects the navbar element from the DOM.
 * 
 * @constant {HTMLElement}
 */
const navbar = document.getElementsByClassName('navbar').item(0);

/**
 * Handles the scroll event for the window.
 * Controls the behavior of the navbar's visibility on scroll.
 * 
 * @function
 * @returns {void}
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > previousScrollPosition) {
        navbar.classList.add('hide-navbar');
    } else {
        navbar.classList.remove('hide-navbar');
    }

    previousScrollPosition = window.scrollY;
});
