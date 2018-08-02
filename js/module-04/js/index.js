'use strict';

//main task

//База товаров

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

//Функция-конструктор Cashier.

const Cashier = function(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;

  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  } 

  this.countTotalPrice = function(order) {
    let totalPrice = 0;
    const orderKeys = Object.keys(order);
    for(const key of orderKeys) {
      if(this.productDatabase.hasOwnProperty(key)){
        totalPrice += this.productDatabase[key] * order[key];
      }
    }
    return totalPrice;
  }

  this.countChange = function(totalPrice) {
    let change;
    if(this.customerMoney >= totalPrice) {
      change = this.customerMoney - totalPrice;
      return change;
    }
    return null;
  }

  this.onSuccess = function(change) {
    console.log(`Спасибо за покупку, ваша сдача ${change}!`);
  }

  this.onError = function() {
    console.log('Очень жаль, вам не хватает денег на покупки');
  }

  this.reset = function() {
    this.customerMoney = 0;
  }
};

/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

/* Пример использования */
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange(totalPrice);

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0