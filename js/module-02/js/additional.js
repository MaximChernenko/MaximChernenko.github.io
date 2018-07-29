'use strict';

//additional task

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

const accBlockedMessage = 'У вас закончились попытки, аккаунт заблокирован!';
const needPasswordMessage = 'Введите свой пароль';
const wellcomeMessage = 'Добро пожаловать!';
const cancelMessage = 'Ну и ладно!';

do {
  if(attempts <= 0) {
      alert(accBlockedMessage);
      break;
  }
  userInput = prompt(needPasswordMessage);
  if (userInput !== null) {
    if (passwords.includes(userInput)) {
        alert(wellcomeMessage);
        break;
    } else {
        attempts -= 1;
        alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
    }
  } else {
    alert(cancelMessage);
    break;
  }
} while (true);
