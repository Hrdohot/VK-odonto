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
const items = window.DEPOIMENTOS || [], car = document.getElementById('carousel'), track = document.getElementById('track');
if (items.length) {
  items.forEach(d => {
    const c = document.createElement('article'); c.className = 'quote';
    const s = document.createElement('p'); s.className = 'stars'; s.textContent = '★★★★★'; s.setAttribute('aria-label', '5 de 5 estrelas');
    const t = document.createElement('p'); t.textContent = d.texto;
    const n = document.createElement('p'); n.className = 'who'; n.textContent = d.nome;
    c.append(s, t, n); track.append(c);
  });
  car.hidden = false;
  car.querySelectorAll('button').forEach(b => b.addEventListener('click', () => track.scrollBy({ left: b.dataset.dir * track.clientWidth * .8, behavior: 'smooth' })));
}
