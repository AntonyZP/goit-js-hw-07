import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      ` <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onClick);
let instance;
function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(
    `
	<img
              src="${evt.target.dataset.source}"
            alt="${evt.target.alt}"
      />`,
    {
      onShow: () => {
        document.addEventListener("keydown", onModalClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", onModalClose);
      },
    }
  );
  instance.show();

  function onModalClose(evt) {
    if (evt.code !== "Escape") {
      console.log("not Escape");
      return;
    } else {
      console.log("Escape");
      instance.close();
    }
  }
}
