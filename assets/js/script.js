document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

/* Disables scrolling when modal is open */
let contactModal = document.getElementById('contact-modal')

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

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
