import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
galleryItems.forEach(el => {
  let galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  let galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.setAttribute('href', el.original);
  galleryItem.append(galleryLink);
  let galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.setAttribute('src', el.preview);
  galleryImage.setAttribute('alt', el.description);
  galleryLink.append(galleryImage);
  galleryContainer.append(galleryItem);
});
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
