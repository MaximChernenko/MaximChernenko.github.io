"use strict";

import EventEmitter from "../services/event-emitter";
import cardItemTmpl from "../templates/card.hbs";

export default class View extends EventEmitter {
  constructor() {
    super();
    this.form = document.querySelector(".form");
    this.input = document.querySelector(".form__input");
    this.resultList = document.querySelector(".card-list");
    this.form.addEventListener("submit", this.onAddUrl.bind(this));
    this.resultList.addEventListener("click", this.onDeleteCard.bind(this));
  }

  onAddUrl(e) {
    e.preventDefault();
    const { value } = this.input;
    this.emit("add", value);
  }

  onDeleteCard({ target }) {
    if (target.nodeName !== "BUTTON") return;
    const parent = target.parentNode;
    const id = parent.dataset.id;
    parent.remove();
    this.emit('remove', id);
  }

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
}
