/**
 * @fileoverview Manages animations on window load.
 * This file contains code to animate the preloader and the document body
 * by adding the "loaded" class after the page and its contents are fully loaded.
 * 
 * @module AnimationManager
 */

/**
 * Selects the preloader element from the DOM.
 * 
 * @constant {HTMLElement}
 */
const preloader = document.querySelector("[data-preload]");

/**
 * Handles the window load event.
 * Adds the "loaded" class to the preloader element and the document body
 * to trigger the loading animations.
 * 
 * @function
 * @param {Event} event - The event object for the window load event.
 * @returns {void}
 * @example
 * // This function is automatically executed after the page loads.
 */
function handleWindowLoad(event) {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
}

// Adds the "load" event to the window to initiate the loading animations.
window.addEventListener("load", handleWindowLoad);
