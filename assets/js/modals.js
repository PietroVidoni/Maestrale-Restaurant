/**
 * @fileoverview Manages modal functionality for newsletter subscription and contact forms.
 * This script handles the opening and closing of modals, as well as their interaction with buttons and backgrounds.
 * 
 * @module ModalManager
 */

/**
 * Selects the HTML element from the DOM.
 * 
 * @constant {HTMLElement}
 */
const html = document.getElementsByTagName('html').item(0);

/**
 * Selects all section elements from the DOM.
 * 
 * @constant {HTMLCollectionOf<HTMLElement>}
 */
const section = document.getElementsByTagName('section');

/**
 * Opens a modal by adding relevant classes and applying necessary changes to the page.
 * 
 * @function
 * @param {HTMLElement} modal - The modal element to be opened.
 * @returns {void}
 */
function openModal(modal) {
    html.classList.add('is-clipped');
    modal.classList.add('is-active');
}

/**
 * Closes a modal by removing relevant classes and restoring the page to its original state.
 * 
 * @function
 * @param {HTMLElement} modal - The modal element to be closed.
 * @returns {void}
 */
function closeModal(modal) {
    html.classList.remove('is-clipped');
    modal.classList.remove('is-active');
}

// Code to open and close the newsletter modal
let nlSection = document.getElementById('newsletter-section');
let nlButton = document.getElementById('newsletter-button');
let nlModal = document.getElementById('newsletter-modal');

nlButton.addEventListener('click', (e) => {
    e.preventDefault();

    Array.from(section).forEach(e => {
        e.style.filter = 'brightness(0.4);';
    });

    openModal(nlModal);
});

// Code to close the newsletter modal when background or close button is clicked
let nlBackground = Array.from(nlModal.querySelectorAll('.modal-background, .modal-close'));

nlBackground.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(nlModal);
    });
});

// Code to open and close the contact modal
let contactSection = document.getElementById('location-section');
let contactButton = document.getElementById('contact-button');
let contactModal = document.getElementById('contact-modal');

contactButton.addEventListener('click', (e) => {
    e.preventDefault();

    Array.from(section).forEach(e => {
        e.style.filter = 'brightness(0.4);';
    });

    openModal(contactModal);
});

// Code to close the contact modal when background or close button is clicked
let contactBackground = Array.from(contactModal.querySelectorAll('.modal-background, .modal-close'));

contactBackground.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(contactModal);
    });
});
