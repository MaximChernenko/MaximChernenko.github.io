'use strict';

//main task

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const cancelMessage = 'Отменено пользователем!';
const loginRequest = 'Введите логин:';
const passwordRequest = 'Введите пароль:';
const welcomeMessage = 'Добро пожаловать!';
const accessDeniedMessage = 'Доступ запрещен!';

let login = prompt(loginRequest, '');
let password;

if (login === null) {
  alert(cancelMessage);
} else if (login === adminLogin) {
  password = prompt(passwordRequest, '');
  if (password === null) {
    alert(cancelMessage);
  } else if (password === adminPassword) {
    alert(welcomeMessage);
  } else {
    alert(accessDeniedMessage);
  }
} else {
  alert(accessDeniedMessage);
}
