import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const listImages = document.querySelector(".gallery");

const imagesMarkup = createImagesListMarkup(galleryItems);
listImages.innerHTML = imagesMarkup;
listImages.addEventListener("click", onCardsContainerClick);

function createImagesListMarkup(images) {
  return images
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" 
  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
function onCardsContainerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  listImages.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
