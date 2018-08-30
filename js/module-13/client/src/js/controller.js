"use strict";

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.initCards();
    this.view.on("add", this.addCard.bind(this));
    this.view.on("remove", this.removeCard.bind(this));
    this.view.on('init', this.initCards.bind(this));
  }

  addCard(value) {
    this.model
      .addUrl(value)
      .then(cardList => this.view.updateView(cardList))
      .catch(err => alert(err));
  }

  removeCard(id) {
    this.model.deleteUrl(id);
  }

  initCards() {
    this.model.initCards().then(cardList => {
      this.view.updateView(cardList);
    })
  }
}
