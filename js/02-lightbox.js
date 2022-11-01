import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  )
  .join("");
galleryList.insertAdjacentHTML("beforeend", markup);
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
console.log(galleryList);
