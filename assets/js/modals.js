const html = document.getElementsByTagName('html').item(0)
let section = document.getElementsByTagName('section')
let modal_on = false;

function openModal(modal) {
    modal_on = true;
    html.classList.add('is-clipped')
    modal.classList.add('is-active')

    let location = document.getElementById('location-section')
    console.log(location);
}

function closeModal(modal) {
    modal_on = false;
    html.classList.remove('is-clipped')
    modal.classList.remove('is-active')
}

/* Makes the button open the newsletter modal */
let nlSection = document.getElementById('newsletter-section')
let nlButton = document.getElementById('newsletter-button')
let nlModal = document.getElementById('newsletter-modal')

nlButton.addEventListener('click', (e) => {
    e.preventDefault()

    Array.from(section).forEach(e => {e.style.filter = 'brightness(0.4);';})

    openModal(nlModal)
})

/* Makes the background/close button close the modal */
let nlbackground = Array.from(nlModal.querySelectorAll('.modal-background, .modal-close'))

nlbackground.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()

        closeModal(nlModal)
    })
})

/* Makes the button open the contact modal */
let contactSection = document.getElementById('location-section')
let contactButton = document.getElementById('contact-button')
let contactModal = document.getElementById('contact-modal')

contactButton.addEventListener('click', (e) => {
    e.preventDefault()

    Array.from(section).forEach(e => {e.style.filter = 'brightness(0.4);';})

    openModal(contactModal)
})

/* Makes the background/close button close the modal */
let contactBackground = Array.from(contactModal.querySelectorAll('.modal-background, .modal-close'))

contactBackground.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()

        closeModal(contactModal)
    })
})