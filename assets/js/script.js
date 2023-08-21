/* Navbar hamburger */
// Select the navbar burger button
const burgerButton = document.getElementsByClassName('navbar-burger').item(0);
// Get the navbar links container
const navbarLinks = document.getElementById('navbar-links');

// Add click event listener to toggle the visibility of navbar links
burgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('is-hidden');
});

/* Navbar highlight */
// Convert the navbar links to an array
const navbarButtons = Array.from(navbarLinks.getElementsByTagName('a'));
// Highlight the active link based on the current URL
navbarButtons.forEach(btn => {
    if (window.location.href.includes(btn.getAttribute('href'))) {
        // Add the 'active' class to the active link
        btn.classList.add('active');
    }
});

/* Navbar scroll */
// Store the previous scroll position
let previousScrollPosition = window.scrollY;
// Get the navbar element
const navbar = document.getElementsByClassName('navbar').item(0);

// Add scroll event listener to handle navbar visibility on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > previousScrollPosition) {
        // Scroll down, hide the navbar
        navbar.classList.add('hide-navbar');
    } else {
        // Scroll up, show the navbar
        navbar.classList.remove('hide-navbar');
    }

    // Update the previous scroll position
    previousScrollPosition = window.scrollY;
});
