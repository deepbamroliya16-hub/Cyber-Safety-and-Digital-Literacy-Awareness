// Highlight active nav link
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topbar-nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
})();
