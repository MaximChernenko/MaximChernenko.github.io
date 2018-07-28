'use strict';

//additional task

const sharm = 'Sharm';
const hurgada = 'Hurgada';
const taba = 'Taba';

const sharmFreePlaces = 15;
const hurgadaFreePlaces = 25;
const tabaFreePlaces = 6;

const needPlacesMessage = 'Введите число необходимых мест:';
const unfortunatelyMessage = 'Нам очень жаль, приходите еще!';
const noPlacesMessage = 'Извините, столько мест нет ни в одной группе!';
const inputErroeMessage = 'Ошибка ввода';

let neededPlaces = Number(prompt(needPlacesMessage, ''));

if (Math.ceil(neededPlaces) - neededPlaces === 0 && neededPlaces > 0) {
  let isConfirmed;
  if (neededPlaces <= tabaFreePlaces) {
    isConfirmed = confirm(
      `Есть места в группе ${taba}, согласны ли вы быть в ней?`
    );
    if (isConfirmed) {
      alert(`Приятного путешествия в группе ${taba}`);
    } else {
      alert(unfortunatelyMessage);
    }
  } else if (neededPlaces <= sharmFreePlaces) {
    isConfirmed = confirm(
      `Есть места в группе ${sharm}, согласны ли вы быть в ней?`
    );
    if (isConfirmed) {
      alert(`Приятного путешествия в группе ${sharm}`);
    } else {
      alert(unfortunatelyMessage);
    }
  } else if (neededPlaces <= hurgadaFreePlaces) {
    isConfirmed = confirm(
      `Есть места в группе ${hurgada}, согласны ли вы быть в ней?`
    );
    if (isConfirmed) {
      alert(`Приятного путешествия в группе ${hurgada}`);
    } else {
      alert(unfortunatelyMessage);
    }
  } else {
    alert(noPlacesMessage);
  }
} else {
  alert(inputErroeMessage);
}
