import "./css/normalize.css";
import "./css/styles.css";
import cardItemTmpl from "./templates/card.hbs";
import storageModule from './services/storage';
import validator from './services/validator';

const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const resultList = document.querySelector(".card-list");
let cardList = getFromLocalStorage();

form.addEventListener("submit", onAddUrl);
resultList.addEventListener("click", onDeleteCard);

updateView();

function onAddUrl(e) {
  e.preventDefault();
  saveUrl(input.value);
}

function onDeleteCard({ target }) {
  if (target.nodeName !== "BUTTON") return;
  const parent = target.parentNode;
  parent.remove();
  const url = parent.children[1].textContent;
  deleteUrl(url);
}

function saveUrl(url) {
  const isNotUnique = checkValue(url);
  if (isNotUnique) {
    alert("Такая закладка уже есть!");
    return;
  }
  const isValid = validateUrl(url);
  if(!isValid) {
    alert('url не валидный!');
    return;
  }
  cardList.push(url);
  updateLocalStorage();
  updateView();
}

function deleteUrl(url) {
  cardList.forEach((item, idx, arr) => {
    if (item === url) {
      arr.splice(idx, 1);
    }
  });
  updateLocalStorage();
}

function checkValue(url) {
  return cardList.includes(url);
}

function updateView() {
  resultList.innerHTML = createMarkUp();
}

function createMarkUp() {
  const reversedList = [...cardList].reverse();
  return reversedList.reduce((acc, url) => {
    const optUrl = optimizeUrl(url);
    return acc + cardItemTmpl({ url: optUrl });
  }, "");``
}

function optimizeUrl(url) {
  const arr = url.split("");
  return insertWbrTag(arr).join("");
}

function insertWbrTag(arr) {
  const wbr = "<wbr>";
  const result = arr.slice();
  result.forEach((item, idx) => {
    if (idx % 25 === 0) {
      result.splice(idx, 0, wbr);
    }
  });
  return result;
}

function updateLocalStorage() {
    storageModule.setItem('card-list', cardList);
}

function getFromLocalStorage() {
    return storageModule.getItem('card-list');
}

function validateUrl(url) {
  return validator.isValid(url);
}
