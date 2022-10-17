import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
const galleryImage = document.querySelectorAll(".gallery__image");
const galleryMarkup = createGallerySmallPictureCard(galleryItems);
let instance;

galleryList.innerHTML = galleryMarkup;

galleryList.addEventListener("click", onGalleryImageClick);


function createGallerySmallPictureCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join("");
}

function onGalleryImageClick(e) {
  e.preventDefault();

  
  galleryImage.src = e.target.dataset.source;

  instance = basicLightbox.create(`<img src="${galleryImage.src}">`);
  onModalImageOpen(instance);
}

function onModalImageOpen(e) {
  window.addEventListener("keydown", onEscKeyPress);
  e.show();
}
function onModalImageClose(e) {
  window.removeEventListener("keydown", onEscKeyPress);
  e.close();
}

function onEscKeyPress(e) {
  if (e.code === "Escape") {
    onModalImageClose(instance);
  }
}