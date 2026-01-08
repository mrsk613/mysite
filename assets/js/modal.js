const links = document.querySelectorAll('.js-modal-link');

links.forEach(link => {
  link.addEventListener('click', e => {

    e.preventDefault();

    const imgSrc = link.dataset.img;
    const alt = link.dataset.alt;
    const desc = link.dataset.desc;

    createModal(imgSrc, alt, desc);
  });
});

function createModal(imgSrc, alt, desc) {
  const modalHtml = `
    <div class="modal js-modal">
      <div class="modal__overlay js-modal-close"></div>

      <div class="modal__content" role="dialog" aria-modal="true">
        <button class="modal__close js-modal-close" aria-label="閉じる">×</button>

        <div class="modal__body">
        <figure class="modal__image-wrap">
          <img src="${imgSrc}" alt="${alt}" class="modal__img">
        </figure>
          <p class="modal__desc">${desc}</p>
        </div>
      </div>
    </div>  
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.body.style.overflow = 'hidden';

  bindModalEvents();
}

function bindModalEvents() {
  const modal = document.querySelector('.js-modal');
  const closeTriggers = modal.querySelectorAll('.js-modal-close');

  closeTriggers.forEach(el => {
    el.addEventListener('click', () => {
      modal.remove();
      document.body.style.overflow = '';
    });
  });
}
