/* Tab switching */
function switchTab(id) {
  const ids = ['materialism', 'class', 'value', 'dialectics'];
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', ids[i] === id);
  });
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
}

/* Hamburger menu */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
});

/* Close mobile nav when a link is tapped */
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

/* Scroll reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .timeline-item').forEach(el => observer.observe(el));
