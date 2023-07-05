/* 
    Script.css
*/

function toggleShape(link) {
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function (link) {
      link.parentNode.classList.remove('active');
      link.parentNode.classList.remove('svg-background');
  });

  link.parentNode.classList.add('active');
  link.parentNode.classList.add('svg-background');
}



  