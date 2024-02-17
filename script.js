//alert logic 
document.getElementById('cv-download-btn').addEventListener('click', function() {
  alert("Click O.K to Download C.V");
});
document.getElementById('connectme-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Trigger the download
  var downloadLink = document.createElement('a');
  downloadLink.href = document.getElementById('cv-download-btn').getAttribute('href');
  downloadLink.download = 'MK_Resume.pdf';
  downloadLink.click();
});
// button go back logic
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop> 600) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

