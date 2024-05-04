function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Function to toggle the visibility of content when the section header is clicked
function toggleContent(header) {
  var content = header.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Function to toggle the notes visibility
function toggleNotes(elem) {
  var noteContainer = elem.nextElementSibling;
  noteContainer.style.display = noteContainer.style.display === 'block' ? 'none' : 'block';
}
