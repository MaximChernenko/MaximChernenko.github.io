"use strict";

import validator from "../services/validator";
import * as api from "../services/apiDataGetter";

export default class Model {
  constructor() {
    this.cardList = [];
  }

  //Добавление карточки

  addUrl(url) {
    const isValid = this.validateUrl(url);
    if (!isValid) {
      alert("url не валидный!");
      return null;
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

  //Удаление карточки

  deleteUrl(id) {
    this.cardList.forEach((item, idx, arr) => {
      if (item.id === id) {
        arr.splice(idx, 1);
      }
    });
    return api.deleteData(id);
  }

  //Поиск карточки по id для дальнейшего редактирования

  searchUrl(idStr, url) {
    const id = Number(idStr);
    let sett = {};
    this.cardList.forEach((item, idx, arr) => {
      if (item.id === id) {
        sett = {
          id,
          url,
          idx,
          arr
        };
      }
    });
    return sett;
  }

  //Редактирование карточки

  editUrl({ id, url, idx, arr }) {
    const isValid = this.validateUrl(url);
    if (!isValid) {
      alert("url не валидный!");
      return null;
    }
    const isNotUnique = this.checkValue({ url });
    if (isNotUnique) {
      alert("Такая закладка уже есть!");
      return null;
    }
    return api
      .getPreview(url)
      .then(resp =>
         api.editData(id, resp.data).then(data => {
          arr.splice(idx, 1, data)
          return arr;
        })
      );
  }

  //Проверка на уникальность карточки

  checkValue(data) {
    return this.cardList.some(item => item.url === data.url);
  }

  //Проверка на соответствие URL строке

  validateUrl(url) {
    return validator.isValid(url);
  }

  //Начальная инициализация странички

  initCards() {
    return api.getData().then(cardList => {
      this.cardList = cardList;
      return this.cardList;
    });
  }
}
