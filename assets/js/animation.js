// Select the preloader element using the attribute selector
const preloader = document.querySelector("[data-preaload]");

// Add an event listener to execute when the page finishes loading
window.addEventListener("load", function () {
    // Add the "loaded" class to the preloader element
    preloader.classList.add("loaded");
    // Add the "loaded" class to the document body
    document.body.classList.add("loaded");
});
