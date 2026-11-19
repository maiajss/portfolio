// Simple carousel: the track scrolls sideways (swipe works too) and the
// arrow buttons move it one image at a time.
document.querySelectorAll('.carousel').forEach(function (c) {
  var track = c.querySelector('.carousel__track');
  var btns = c.querySelectorAll('.carousel__btn');
  function step() {
    var item = track.children[0];
    var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return item ? item.getBoundingClientRect().width + gap : track.clientWidth;
  }
  function update() {
    var max = track.scrollWidth - track.clientWidth - 2;
    btns[0].disabled = track.scrollLeft <= 2;
    btns[1].disabled = track.scrollLeft >= max;
  }
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      track.scrollBy({ left: step() * Number(b.dataset.dir), behavior: 'smooth' });
    });
  });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});
