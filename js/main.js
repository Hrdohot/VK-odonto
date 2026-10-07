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
  const card = (d, clone) => {
    const c = document.createElement('article'); c.className = 'quote'; if (clone) c.setAttribute('aria-hidden', 'true');
    const n = document.createElement('p'); n.className = 'who'; n.textContent = d.nome;
    const s = document.createElement('p'); s.className = 'stars'; s.textContent = '★★★★★'; s.setAttribute('aria-label', '5 de 5 estrelas');
    const t = document.createElement('p'); t.textContent = d.texto;
    c.append(n, s, t); return c;
  };
  [0, 1, 2].forEach(i => items.forEach(d => track.append(card(d, i !== 1))));
  car.hidden = false;
  const n = items.length, setW = () => track.children[n].offsetLeft - track.children[0].offsetLeft, step = () => track.children[1].offsetLeft - track.children[0].offsetLeft;
  track.scrollLeft = setW();
  let timer;
  track.addEventListener('scroll', () => {
    clearTimeout(timer);
    timer = setTimeout(() => { const w = setW(); if (track.scrollLeft < w * .5) track.scrollLeft += w; else if (track.scrollLeft > w * 1.5) track.scrollLeft -= w; }, 150);
  });
  car.querySelectorAll('button').forEach(b => b.addEventListener('click', () => track.scrollBy({ left: b.dataset.dir * step(), behavior: 'smooth' })));
}
