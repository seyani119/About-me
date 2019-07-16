
function toggleSection(id) {
  // first get dom element specified by name
  var elt = document.getElementById(id)

  if (elt.style.visibility == 'hidden') {
    elt.style.visibility = 'visible';
  } else {
    elt.style.visibility = 'hidden';
  }
}
