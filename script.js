// Simple scroll animation
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.style.transition = "all 0.6s ease";
      sec.style.transform = "translateY(0)";
      sec.style.opacity = "1";
    } else {
      sec.style.opacity = "0.2";
      sec.style.transform = "translateY(50px)";
    }
  });
});
