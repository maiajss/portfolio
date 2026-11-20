// Flipbook: shows one image at a time and swaps to the next on a timer.
// Stays on the first image for visitors who ask for reduced motion.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.flipbook').forEach(function (book) {
    var imgs = book.querySelectorAll('img');
    if (reduce || imgs.length < 2) return;
    var i = 0;
    setInterval(function () {
      imgs[i].classList.remove('is-active');
      i = (i + 1) % imgs.length;
      imgs[i].classList.add('is-active');
    }, Number(book.dataset.interval) || 500);
  });
})();
