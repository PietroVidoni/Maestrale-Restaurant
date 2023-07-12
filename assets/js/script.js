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
