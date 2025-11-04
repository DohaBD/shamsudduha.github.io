// Smooth scrolling to sections
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // offset for sticky navbar
        behavior: 'smooth'
      });
    }
  });
});



