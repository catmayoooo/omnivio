document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navLinks.classList.add('scrolled');
    } else {
      navLinks.classList.remove('scrolled');
    }
  });
});
