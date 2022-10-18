import { galleryItems } from "./gallery-items.js"; 
 
const galleryList = document.querySelector(".gallery"); 
const galleryMarkup = createGallerySmallPictureCard(galleryItems); 
 
let instance; 
 
galleryList.insertAdjacentHTML("beforeend", galleryMarkup); 
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
 
function onGalleryImageClick(event) { 
  event.preventDefault(); 
 
  if (!event.target.classList.contains("gallery__image")) return; 
 
  let galleryImages = event.target.dataset.source; 
 
  instance = basicLightbox.create( 
    `<img src="${galleryImages}" width="800" height="600">`, 
    { 
      onShow: () => { 
        console.log("Добавили ESC"); 
        document.addEventListener("keydown", onEscKeyPress); 
      }, 
      onClose: () => { 
        console.log("Убрали ESC"); 
        document.removeEventListener("keydown", onEscKeyPress); 
      }, 
    } 
  ); 
 
  instance.show(); 
} 
 
function onEscKeyPress(event) { 
  if (event.key === "Escape") { 
    instance.close(() => { 
      console.log("Закрыли, когда нажали ESC"); 
    }); 
  } 
}