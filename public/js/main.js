const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}