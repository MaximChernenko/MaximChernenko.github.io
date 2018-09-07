"use strict";

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.initCards();
    this.view.on("add", this.addCard.bind(this));
    this.view.on("remove", this.removeCard.bind(this));
    this.view.on("edit", this.editCard.bind(this));
    this.view.on("edit-save", this.saveEditCard.bind(this));
    this.view.on("edit-close", this.closeEdit.bind(this));
  }

  //Добавить

  addCard(value) {
    this.model
      .addUrl(value)
      .then(cardList => this.view.updateView(cardList))
      .catch(err => alert(err));
  }

  //Удалить

  removeCard(id) {
    this.model.deleteUrl(id).catch(err => alert(err));
  }

  //Начать редактирование

  editCard(parentNode) {
    this.view.showModal(parentNode);
  }

  //Сохранить отредактированую карточку

  saveEditCard(id, value) {
    const sett = this.model.searchUrl(id, value);
    this.model
      .editUrl(sett)
      .then(() => {
        this.view.closeModal();
        this.view.updateView(this.model.cardList);
      })
      .catch(err => alert(err));
  }

  //Закрытие/отмена редактирования

  closeEdit() {
    this.view.closeModal();
  }

  //Инициализация

  initCards() {
    this.model.initCards().then(cardList => {
      this.view.updateView(cardList);
    });
  }
}
