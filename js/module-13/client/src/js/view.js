"use strict";

import EventEmitter from "../services/event-emitter";
import cardItemTmpl from "../templates/card.hbs";

export default class View extends EventEmitter {
  constructor() {
    super();
    this.form = document.querySelector(".form");
    this.input = document.querySelector(".form__input");
    this.resultList = document.querySelector(".card-list");
    this.modal = document.querySelector('.modal-backdrop');
    this.editForm = document.querySelector('.modal-form');
    this.btnCancel = document.querySelector('[data-action="cancel"]');
    this.form.addEventListener("submit", this.onAddUrl.bind(this));
    this.resultList.addEventListener("click", this.onDeleteCard.bind(this));
    this.resultList.addEventListener('click', this.onEditCard.bind(this));
    this.editForm.addEventListener('submit', this.onEditSumbit.bind(this));
    this.btnCancel.addEventListener('click', this.onCancelEdit.bind(this));

    this.currentId = ''; //Поле для сохранения id текущей карточки
  }

  //Методы-обработчики

  onAddUrl(e) {
    e.preventDefault();
    const { value } = this.input;
    this.emit("add", value);
  }

  onDeleteCard({ target }) {
    if (target.nodeName !== "BUTTON") return;
    if(target.dataset.action !== "delete") return;
    const parent = target.parentNode;
    const id = parent.dataset.id;
    parent.remove();
    this.emit('remove', id);
  }

  onEditCard({target}) {
    if (target.nodeName !== "BUTTON") return;
    if(target.dataset.action !== "edit") return;
    const parent = target.parentNode;
    this.emit('edit', parent);
  }

  onEditSumbit(e) {
    e.preventDefault();
    const { value } = this.modal.querySelector('.modal-form__input');
    this.emit('edit-save', this.currentId, value);
  }

  onCancelEdit(e) {
    e.preventDefault();
    this.emit('edit-close');
  }

  //=====================

  //Обновление интерфейса

  updateView(cardList) {
    this.resultList.innerHTML = this.createMarkUp(cardList);
  }

  createMarkUp(cardList) {
    const reversedList = [...cardList].reverse();
    return reversedList.reduce((acc, data) => {
      const optUrl = this.optimizeUrl(data.url);
      return acc + cardItemTmpl({ ...data, url: optUrl });
    }, "");
  }

  optimizeUrl(url) {
    const arr = url.split("");
    return this.insertWbrTag(arr).join("");
  }

  insertWbrTag(arr) {
    const wbr = "<wbr>";
    const result = arr.slice();
    result.forEach((item, idx) => {
      if (idx % 25 === 0) {
        result.splice(idx, 0, wbr);
      }
    });
    return result;
  }

  //==========================
  //Открытие модального окна для редактирования

  showModal(parentNode) {
    this.modal.classList.remove('d-none');
    const urlToEdit = parentNode.querySelector('.card-item__url');
    const input  = this.modal.querySelector('.modal-form__input');
    input.value = urlToEdit.textContent;
    this.currentId = parentNode.dataset.id;
  }

  //Закрытие модального окна для редактирования

  closeModal() {
    this.modal.classList.add('d-none');
  }
}
