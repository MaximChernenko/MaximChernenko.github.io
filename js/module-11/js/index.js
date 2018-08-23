'use strict';

const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  }
];

const form = document.querySelector('.js-form');
const clearBtn =document.querySelector('.js-clear');
const sizesInput = Array.from(document.querySelectorAll('[name="size"]'));
const colorsInput = Array.from(document.querySelectorAll('[name="color"]'));
const releaseDatesInput = Array.from(document.querySelectorAll('[name="release_date"]'));
const inner = document.querySelector('.inner');
const source = document.querySelector('#card-template').innerHTML.trim();
form.addEventListener('submit', onFilter);
clearBtn.addEventListener('click', onClear);

function onFilter(e) {
  e.preventDefault();
  clearCards();
  collectFilterValues();
}

function onClear() {
  clearCards();
}

function collectFilterValues() {
  const sizes = sizesInput
    .filter(input => input.checked)
    .map(input => input.value);
  const colors = colorsInput
    .filter(input => input.checked)
    .map(input => input.value);
  const releaseDates = releaseDatesInput
    .filter(input => input.checked)
    .map(input => input.value);
  const cards = filterCards(sizes, colors, releaseDates);
  if (cards.length !== 0) {
    showCards(cards);
  } else {
    alert('Not found');
  }
}

function filterCards(sizes, colors, releaseDates) {
  if (sizes.length === 0 && colors.length === 0 && releaseDates.length === 0) {
    return laptops;
  }
  if (sizes.length === 0 && colors.length === 0) {
    return laptops.filter(laptop =>
      releaseDates.includes(String(laptop.release_date))
    );
  }
  if (sizes.length === 0 && releaseDates.length === 0) {
    return laptops.filter(laptop => colors.includes(laptop.color));
  }
  if (releaseDates.length === 0 && colors.length === 0) {
    return laptops.filter(laptop => sizes.includes(String(laptop.size)));
  }
  if (sizes.length === 0) {
    return laptops.filter(
      laptop =>
        colors.includes(laptop.color) &&
        releaseDates.includes(String(laptop.release_date))
    );
  }
  if (colors.length === 0) {
    return laptops.filter(
      laptop =>
        sizes.includes(String(laptop.size)) &&
        releaseDates.includes(String(laptop.release_date))
    );
  }
  if (releaseDates.length === 0) {
    return laptops.filter(
      laptop =>
        colors.includes(laptop.color) && sizes.includes(String(laptop.size))
    );
  }
  return laptops.filter(
    laptop =>
      colors.includes(laptop.color) &&
      sizes.includes(String(laptop.size)) &&
      releaseDates.includes(String(laptop.release_date))
  );
}

function showCards(cards) {
  const template = Handlebars.compile(source);
  const markup = createCards(template, cards);
  inner.insertAdjacentHTML('afterbegin', markup);
}

function createCards(template, cards) {
  return cards.reduce((acc, card) => acc + template(card), '');
}

function clearCards() {
  const cards = Array.from(inner.children);
  if (cards.length !== 0) {
    cards.forEach(card => card.remove());
  }
}
