import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', onGalleryClick);
let modalBox;
document.addEventListener('keydown', onPressEsc);

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
  galleryImage.setAttribute('data-source', el.original);
  galleryLink.append(galleryImage);
  galleryContainer.append(galleryItem);
});

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  let originalImg = event.target.dataset.source;
  modalBox = basicLightbox.create(
    `
		<img width="1400" height="900" src="${originalImg}">
	`,
  );
  modalBox.show();
}
function onPressEsc(event) {
  if (event.code === 'Escape' && modalBox != null) {
    modalBox.close();
  }
}
