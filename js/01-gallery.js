import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
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
  let galleryImages = e.target.dataset.source;
  instance = basicLightbox.create(`<img src="${galleryImages}" width="800" height="600">`);
  instance.show();
  galleryList.addEventListener("keydown", onEscKeyPress);
  function onEscKeyPress(e) {
    if (e.key === "Escape") {
      instance.close(() => console.log(""));
      galleryList.removeEventListener("keydown", onEscKeyPress);
    }
  }
};