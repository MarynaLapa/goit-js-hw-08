// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
// console.log(galleryList)

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                <img class="gallery__image"
                src="${preview}" 
                alt="${description}" />
            </a>
        </li>
        `)
    .join('');
}

galleryList.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

const options = {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionPosition: 'bottom',
  captionsData: 'alt',
};

let gallery = new SimpleLightbox('.gallery a', options);
