const btn = document.querySelector('.burger'), nav = document.getElementById('menu');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });
document.getElementById('ano').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
} else document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
