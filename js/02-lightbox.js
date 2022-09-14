import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = createGalerryItemsMarkup(galleryItems);

galleryEl.innerHTML = galleryItemsMarkup;

function createGalerryItemsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
      `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
