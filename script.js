// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in effect for sections on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    } else {
      sec.style.opacity = "0.5";
      sec.style.transform = "translateY(40px)";
    }
  });
});

