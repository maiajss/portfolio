// Videos with a custom thumbnail: show the image first and load the
// player only when someone presses play.
document.querySelectorAll('.project__video--poster').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var frame = document.createElement('iframe');
    frame.src = btn.dataset.embed;
    frame.title = btn.getAttribute('aria-label') || 'Video';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    var box = document.createElement('div');
    box.className = 'project__video';
    box.appendChild(frame);
    btn.replaceWith(box);
  });
});
