import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
const galleryImage = document.querySelectorAll(".gallery__image");
const galleryMarkup = createGallerySmallPictureCard(galleryItems);

galleryList.innerHTML = galleryMarkup;

function createGallerySmallPictureCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
