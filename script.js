document.getElementById('cv-download-btn').addEventListener('click', function() {
  alert("click OK to download your C.V ");
});
const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 10,
    behavior: 'smooth'
  });
});
