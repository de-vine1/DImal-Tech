// Load Header
fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
  });

// Load Footer
fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
    // Set the year after footer is loaded
    var yearSpan = document.getElementById('footer-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });

//Load Header-2
fetch("header2.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header2-placeholder").innerHTML = data;
  });

// Sticky Header Script
window.addEventListener('scroll', function() {
  var header = document.getElementById('sticky-header');
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
});

