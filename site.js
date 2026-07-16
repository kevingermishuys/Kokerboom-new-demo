if ('IntersectionObserver' in window) {
  document.body.classList.add('rise-active');

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.rise').forEach(function (el) {
    io.observe(el);
  });
}
