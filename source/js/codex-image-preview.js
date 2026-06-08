(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
      return;
    }
    fn();
  }

  ready(function () {
    var images = Array.prototype.slice.call(document.querySelectorAll('.codex-shot img'));
    if (!images.length) return;

    var overlay = document.createElement('div');
    overlay.className = 'codex-image-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = [
      '<button class="codex-image-modal-close" type="button" aria-label="关闭图片预览">×</button>',
      '<figure class="codex-image-modal-figure">',
      '<img class="codex-image-modal-img" alt="">',
      '<figcaption class="codex-image-modal-caption"></figcaption>',
      '</figure>'
    ].join('');
    document.body.appendChild(overlay);

    var modalImg = overlay.querySelector('.codex-image-modal-img');
    var caption = overlay.querySelector('.codex-image-modal-caption');
    var closeButton = overlay.querySelector('.codex-image-modal-close');

    function close() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('codex-image-modal-open');
      modalImg.removeAttribute('src');
    }

    function open(img) {
      var figure = img.closest('figure');
      var text = '';
      if (figure) {
        var figcaption = figure.querySelector('figcaption');
        text = figcaption ? figcaption.textContent.trim() : '';
      }
      modalImg.src = img.currentSrc || img.src;
      modalImg.alt = img.alt || text || '图片预览';
      caption.textContent = text || img.alt || '';
      caption.hidden = !caption.textContent;
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('codex-image-modal-open');
      closeButton.focus();
    }

    images.forEach(function (img) {
      var figure = img.closest('figure');
      var text = '';
      if (figure) {
        var figcaption = figure.querySelector('figcaption');
        text = figcaption ? figcaption.textContent.trim() : '';
      }
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', '点击放大图片' + (text ? '：' + text : ''));
      img.addEventListener('click', function () {
        open(img);
      });
      img.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open(img);
        }
      });
    });

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) close();
    });
    closeButton.addEventListener('click', close);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
        close();
      }
    });
  });
})();
