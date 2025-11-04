// Fade-in animation on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    } else {
      sec.style.opacity = "0.5";
      sec.style.transform = "translateY(30px)";
    }
  });
});

