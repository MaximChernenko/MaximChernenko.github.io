'use strict';

//main task

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {

  /**
   * @constructor
   * @param {String} size - Размер
   * @param {String} stuffing - Начинка
   */

  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  /**
   * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
   * @param {String} topping - Тип добавки
   */

  addTopping(topping) {
    if(this._toppings.includes(topping)) return;
    this._toppings.push(topping);
  }

  /**
   * Убрать topping, при условии, что она ранее была добавлена
   * @param {String} topping - Тип добавки
   */

  removeTopping(topping) {
  if(this._toppings.includes(topping)) {
      this._toppings = this._toppings.filter(item => item !== topping);
    }
  }

  /**
   * Получить список toppings
   * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
   */

  get toppings() {
    return this._toppings;
  }

  /**
   * Узнать размер гамбургера
   * @returns {String} - размер гамбургера
   */

  get size() {
    return this._size;
  }

  /**
   * Узнать начинку гамбургера
   * @returns {String} - начинка гамбургера
   */

  get stuffing() {
    return this._stuffing;
  }

  /**
   * Узнать цену гамбургера
   * @returns {Number} - Цена в деньгах
   */

  get price() {
    let totalPrice = this._size.price;
    totalPrice += this._stuffing.price;
    for(const item of this._toppings) {
      totalPrice += item.price;
    }
    
    return totalPrice;
  }

  /**
   * Узнать калорийность
   * @returns {Number} - Калорийность в калориях
   */

  get calories() {
    let totalCalories = this._size.calories;
    totalCalories += this._stuffing.calories;
    for(const item of this._toppings) {
      totalCalories += item.calories;
    }
    
    return totalCalories;
  }
}

  Hamburger.SIZES = {
    SIZE_SMALL: {
      price: 30,
      calories: 50,
    },
    SIZE_LARGE: {
      price: 50,
      calories: 100,
    }
  };

  Hamburger.STUFFINGS = {
    STUFFING_CHEESE: {
      price: 15,
      calories: 20,
    },
    STUFFING_SALAD: {
      price: 20,
      calories: 5,
    },
    STUFFING_MEAT: {
      price: 35,
      calories: 15,
    }
  };

  Hamburger.TOPPINGS = {
    TOPPING_SPICE: {
      price: 10,
      calories: 0,
    },
    TOPPING_SAUCE: {
      price: 15,
      calories: 5,
    }
  };

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZES.SIZE_SMALL, Hamburger.STUFFINGS.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPINGS.TOPPING_SPICE);

// Спросим сколько там калорий
console.log('Calories: ', hamburger.calories);

// Сколько стоит?
console.log('Price: ', hamburger.price);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPINGS.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log('Price with sauce: ', hamburger.price);

// Проверить, большой ли гамбургер?
console.log('Is hamburger large: ', hamburger.size === Hamburger.SIZES.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPINGS.TOPPING_SPICE);

// Смотрим сколько добавок
console.log('Hamburger has %d toppings', hamburger.toppings.length); // 1
