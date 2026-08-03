// header scroll state
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, {passive:true});

// mobile nav
const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
}, {threshold:0.15});
document.querySelectorAll('.reveal, .reveal-scale, .maze-divider').forEach(el => io.observe(el));

// lightbox gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-grid figure').forEach(fig => {
  fig.addEventListener('click', () => {
    lightboxImg.src = fig.dataset.full;
    lightboxImg.alt = fig.querySelector('img').alt;
    lightbox.classList.add('open');
  });
});
document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

// contact form (demo submit, no backend)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.classList.add('show');
  form.reset();
  setTimeout(() => formMsg.classList.remove('show'), 6000);
});
