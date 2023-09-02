/**
 * @fileoverview Handles the form submission for newsletter subscription.
 * This script intercepts the form submission event, sends a POST request
 * to a server-side script, and updates the UI accordingly based on the response.
 * 
 * @module NewsletterSubscription
 */

/**
 * Handles the form submission event for the newsletter subscription form.
 * Prevents the default form submission, sends a POST request using XMLHttpRequest,
 * and updates the UI based on the response.
 * 
 * @function
 * @param {Event} event - The event object for the form submission event.
 * @returns {void}
 * @example
 * // This function is executed when the newsletter form is submitted.
 */
function handleFormSubmit(event) {
    event.preventDefault();

    let resultMessage;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'assets/php/newsLetter.php', true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            var checkIcon = document.querySelector(".has-icons-right .fa-check");
            var subscribeButton = document.getElementById("subscribe-button");

            checkIcon.classList.add("has-text-success");
            subscribeButton.style.display = "none";
            resultMessage = "Email registered!";
        } else {
            console.error('Error on AJAX request');
            resultMessage = "Error on the registration";
        }
        document.getElementById("emailMessage").innerHTML = resultMessage;
    };

    xhr.send(new FormData(this));
}

// Adds the form submission event listener to the newsletter form.
document.getElementById('newsletter-form').addEventListener('submit', handleFormSubmit);
