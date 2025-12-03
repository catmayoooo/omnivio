document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Scroll color change effect (desktop pillbox behavior)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navLinks.classList.add('scrolled');
    } else {
      navLinks.classList.remove('scrolled');
    }
  });
});
