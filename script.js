// Smooth fade-in for sections
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.style.transition = "all 0.6s ease";
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    } else {
      sec.style.opacity = "0.3";
      sec.style.transform = "translateY(40px)";
    }
  });
});
