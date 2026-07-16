/* Kokerboom animation engine — the ONLY JS on the site. */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function countUp(el) {
    var target = parseInt(el.dataset.count, 10) || 0;
    if (reduced) { el.textContent = target.toLocaleString(); return; }
    var t0 = null;
    function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1200, 1);
      p = 1 - Math.pow(1 - p, 3); /* ease-out cubic */
      el.textContent = Math.round(target * p).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function onEnter(e, io) {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.querySelectorAll('.count').forEach(countUp);
    if (e.target.classList.contains('count')) countUp(e.target);
    io.unobserve(e.target);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { onEnter(e, io); });
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });

  /* .wipe starts fully clipped => zero visible area => a 0.2 threshold
     never fires. Clipped elements get their own zero-threshold observer. */
  var ioWipe = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { onEnter(e, ioWipe); });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });

  document.querySelectorAll(
    '.reveal, .reveal-lines, .divider-branch, .steps, .count'
  ).forEach(function (el) { io.observe(el); });
  document.querySelectorAll('.wipe').forEach(function (el) { ioWipe.observe(el); });
})();
