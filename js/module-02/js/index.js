"use strict";

//main task

(() => {
  let userInput;
  const numbers = [];
  let total = 0;

  const needInputMessage = "Введите число";
  const notNumberMessage = "Вы ввели не число, повторите ввод";
  const emptyArrayMessage = "Массив пустой!";
  do {
    userInput = prompt(needInputMessage);
    if (userInput !== null) {
      let numb = Number(userInput);
      if (!Number.isNaN(numb)) {
        numbers.push(numb);
      } else {
        alert(notNumberMessage);
      }
    } else {
      if (numbers.length !== 0) {
        for (let item of numbers) {
          total += item;
        }
        alert(`Общая сумма чисел равна ${total}`);
        break;
      } else {
        alert(emptyArrayMessage);
        break;
      }
    }
  } while (true);
})();
