"use strict";

import validator from "../services/validator";
import * as api from "../services/linkPreviewGetter";

export default class Model {
  constructor() {
    this.cardList = [];
  }

  addUrl(url) {
    const isValid = this.validateUrl(url);
    if (!isValid) {
      alert("url не валидный!");
      return;
    }
    return api
      .getPreview(url)
      .then(response => {
        const data = response.data;
        const isNotUnique = this.checkValue(data);
        if (isNotUnique) {
          const errorText = "Такая закладка уже есть!";
          throw new Error(errorText);
        }
        return data;
      })
      .then(data => {
        return api.postData(data).then(card => {
          this.cardList.push(card);
          return this.cardList;
        });
      });
  }

  deleteUrl(id) {
    this.cardList.forEach((item, idx, arr) => {
      if (item.id === id) {
        arr.splice(idx, 1);
      }
    });
    api.deleteData(id);
  }

  checkValue(data) {
    return this.cardList.some(item => item.url === data.url);
  }

  validateUrl(url) {
    return validator.isValid(url);
  }

  initCards() {
    return api.getData().then(cardList => {
      this.cardList = cardList;
      return this.cardList;
    });
  }
}
