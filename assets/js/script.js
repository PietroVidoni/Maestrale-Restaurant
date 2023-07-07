/* 
    Script.css
*/

function toggleShape(link) {
    var links = document.querySelectorAll('.navbar-item');

    links.forEach(function (link) {
        link.classList.remove('button-highlight');
        link.style.color = 'var(--light-font-color)';
    });

    link.classList.add('button-highlight');
    link.style.color = 'var(--dark-font-color)';
}

const navbar = document.querySelector('.navbar');

let prevScrollPos = window.pageYOffset;

const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
    } else {
        navbar.classList.remove('navbar-visible');
        navbar.classList.add('navbar-hidden');
    }

    prevScrollPos = currentScrollPos;
};

window.addEventListener('scroll', handleScroll);

/* Navbar hamburger */

$(document).click(function(e) {
    var menu = $('.navbar-burger');
    var button = $('#burger-menu-button');
    
    console.log(button);

    if (!menu.is(e.target) && menu.has(e.target).length === 0 &&
      !button.is(e.target) && button.has(e.target).length === 0) {
        var checkbox = document.getElementById("burger-menu-button");
        checkbox.checked = false;        
    }
  });
  