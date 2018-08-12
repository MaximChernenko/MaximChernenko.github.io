'use strict';

const galleryItems = [
  { preview: 'img/1.jpg', fullview: 'img/1_big.jpg', alt: 'alt text 1' },
  { preview: 'img/2.jpg', fullview: 'img/2_big.jpg', alt: 'alt text 2' },
  { preview: 'img/3.jpg', fullview: 'img/3_big.jpg', alt: 'alt text 3' },
  { preview: 'img/4.jpg', fullview: 'img/4_big.jpg', alt: 'alt text 4' },
  { preview: 'img/5.jpg', fullview: 'img/5_big.jpg', alt: 'alt text 5' },
  { preview: 'img/6.jpg', fullview: 'img/6_big.jpg', alt: 'alt text 6' }
];

const gallery = document.querySelector('.js-image-gallery');
const fullview = createFullview();
const preview = createPreview();
preview.addEventListener('click', showFullview);
gallery.append(fullview, preview);

function showFullview({target}) {
    if(target.nodeName !== 'IMG') return;
    const fullviewImg = createFullviewImg({fullview: target.dataset.fullview, alt: target.getAttribute('alt')});
    fullview.firstElementChild.replaceWith(fullviewImg);
}

function createFullview() {
    const fullview = document.createElement('div');
    fullview.classList.add('fullview');
    fullview.appendChild(createFullviewImg(galleryItems[0]));
    return fullview;
}

function createFullviewImg({fullview, alt}) {
    const img = document.createElement('img');
    img.classList.add('fullview__img');
    img.setAttribute('src', fullview);
    img.setAttribute('alt', alt);
    return img;
}

function createPreview() {
    const preview = document.createElement('ul');
    preview.classList.add('preview');
    const previewItems = createPreviewElements(galleryItems);
    preview.append(...previewItems);
    return preview;
}

function createPreviewElements(items) {
    return items.map(item => createPreviewElement(item));
}

function createPreviewElement({ preview, fullview, alt }) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('preview__img');
    img.setAttribute('src', preview);
    img.setAttribute('data-fullview', fullview);
    img.setAttribute('alt', alt);
    li.appendChild(img);
    return li;
}

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ. Чтобы посмотреть - раскомментируйте.
*/

// class Gallery {
//   constructor({items, parentNode, defaultActiveItem}) {
//     this.items = items;
//     this.parentNode = parentNode;
//     this.defaultActiveItem = defaultActiveItem;
//     this.fullview = this.createFullview();
//     this.preview = this.createPreview();
//   }

//   create() {
//     this.preview.addEventListener('click', this.showFullview.bind(this));
//     this.parentNode.append(this.fullview, this.preview);
//   }

//   createFullview() {
//     const fullview = document.createElement('div');
//     fullview.classList.add('fullview');
//     fullview.appendChild(this.createFullviewImg(this.items[this.defaultActiveItem]));
//     return fullview;
//   }

//   createFullviewImg({ fullview, alt }) {
//     const img = document.createElement('img');
//     img.classList.add('fullview__img');
//     img.setAttribute('src', fullview);
//     img.setAttribute('alt', alt);
//     return img;
//   }

//   createPreview() {
//     const preview = document.createElement('ul');
//     preview.classList.add('preview');
//     const previewItems = this.createPreviewElements(this.items);
//     preview.append(...previewItems);
//     return preview;
//   }

//   createPreviewElements(items) {
//     return items.map(item => this.createPreviewElement(item));
//   }

//   createPreviewElement({ preview, fullview, alt }) {
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     img.classList.add('preview__img');
//     img.setAttribute('src', preview);
//     img.setAttribute('data-fullview', fullview);
//     img.setAttribute('alt', alt);
//     li.appendChild(img);
//     return li;
//   }

//   showFullview({target}) {
//     if (target.nodeName !== 'IMG') return;
//     const fullviewImg = this.createFullviewImg({
//       fullview: target.dataset.fullview,
//       alt: target.getAttribute('alt')
//     });
//     this.fullview.firstElementChild.replaceWith(fullviewImg);
//   }
// }

// // Пример использования

// const gallery = new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 0
// });

// gallery.create();
