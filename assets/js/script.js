/* 
    Script.css
*/

function toggleShape(link) {
    // Rimuovi la classe 'active' da tutti i link
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
  
    // Aggiungi la classe 'active' al link cliccato
    link.classList.add('active');
  }
  