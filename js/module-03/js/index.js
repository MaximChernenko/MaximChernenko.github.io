'use strict';

//main task

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const notValidMessage = 'Ошибка! Логин должен быть от 4 до 16 символов';
const successMessage = 'Логин успешно добавлен!';
const notUniqueMessage = 'Такой логин уже используется!';

const isLoginValid = login => {
  const length = login.length;
  if (length >= 4 && length <= 16) return true;
  return false;
};

const isLoginUnique = (allLogins, login) => {
  if(allLogins.includes(login)) return false;
  return true;
};

const addLogin = (login) => {
  if(!isLoginValid(login)) return notValidMessage;
  if(isLoginUnique(logins, login)) {
    logins.push(login);
    return successMessage;
  }
  return notUniqueMessage;
};

// Вызовы функции для проверки
console.log(addLogin('Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin('robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin('Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin('jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'