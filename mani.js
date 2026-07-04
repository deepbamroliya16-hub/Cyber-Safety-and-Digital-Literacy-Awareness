// Active nav link
(function(){
  const f = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topbar-nav a').forEach(a=>{
    if(a.getAttribute('href')===f || a.getAttribute('href')==='../'+f) a.classList.add('active');
  });
})();

// Scroll fade-in
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.12});
document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));
