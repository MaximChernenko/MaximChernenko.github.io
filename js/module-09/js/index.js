'use strict';

const btnStart = document.querySelector('.js-start');
const btnReset = document.querySelector('.js-reset');
const btnTakeLap = document.querySelector('.js-take-lap');
const timeBox = document.querySelector('.js-time');
const lapsList = document.querySelector('.js-laps');
let intervalId = null;
let startTime = null;
let currentTime = null;
let deltaTime = null;
let isActive = false;
let isPaused = false;
let tempTimerValue = 0;
let delay = 0;
const laps = [];
btnStart.addEventListener('click', startTimer);
btnReset.addEventListener('click', resetTimer);
btnTakeLap.addEventListener('click', addCurrentTimerValue);

function startTimer() {
  if (!isActive) {
    isActive = true;
    toggleResetBtn();
    startTime = Date.now();
    intervalId = setInterval(updateTime, 100);
    changeToPauseBtn();
    return;
  }
  if (isActive && !isPaused) {
    isPaused = true;
    setPause();
    changeToContinueBtn();
    return;
  }
  if (isActive && isPaused) {
    isPaused = false;
    setContinue();
    changeToPauseBtn();
  }
}

function resetTimer() {
  isActive = false;
  isPaused = false;
  startTime = null;
  deltaTime = null;
  delay = 0;
  clearInterval(intervalId);
  setUpdatedTime(0);
  changeToStartBtn();
  toggleResetBtn();
}

function setPause() {
  tempTimerValue = Date.now();
  clearInterval(intervalId);
}

function setContinue() {
  const currentDelayTime = Date.now();
  delay += currentDelayTime - tempTimerValue;
  intervalId = setInterval(updateTime, 100);
}

function updateTime() {
  currentTime = Date.now() - delay;
  deltaTime = currentTime - startTime;
  setUpdatedTime(deltaTime);
}

function setUpdatedTime(deltaTime) {
  timeBox.textContent = getTimeString(deltaTime);
}

function getTimeString(deltaTime) {
  const date = new Date(deltaTime);
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const ms = Number.parseInt(date.getMilliseconds() / 100);
  let result = `${min}:${sec}.${ms}`;
  if (min < 10) {
    result = `0${min}:${sec}.${ms}`;
  }
  if (sec < 10) {
    result = `${min}:0${sec}.${ms}`;
  }
  if (min < 10 && sec < 10) {
    result = `0${min}:0${sec}.${ms}`;
  }
  return result;
}

function changeToPauseBtn() {
  btnStart.textContent = 'Pause';
  btnStart.classList.remove('btn--green');
  btnStart.classList.remove('btn--blue');
  btnStart.classList.add('btn--yellow');
}

function changeToContinueBtn() {
  btnStart.textContent = 'Continue';
  btnStart.classList.remove('btn--yellow');
  btnStart.classList.add('btn--blue');
}

function changeToStartBtn() {
  btnStart.textContent = 'Start';
  btnStart.classList.remove('btn--yellow');
  btnStart.classList.remove('btn--blue');
  btnStart.classList.add('btn--green');
}

function toggleResetBtn() {
  let isDisabled = btnReset.disabled;
  if (isDisabled) {
    isDisabled = false;
    btnReset.classList.remove('btn--disabled');
  } else {
    isDisabled = true;
    btnReset.classList.add('btn--disabled');
  }
  btnReset.disabled = isDisabled;
}

function addCurrentTimerValue() {
  const currentTimerValue = timeBox.textContent;
  laps.push(currentTimerValue);
  const li = createLi(currentTimerValue);
  lapsList.appendChild(li);
}

function createLi(currentTimerValue) {
  const li = document.createElement('li');
  li.textContent = currentTimerValue;
  return li;
}

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ. Чтобы посмотреть - раскомментируйте
*/

// class Stopwatch {
//   constructor({ parent, lapsList }) {
//     this.parent = parent;
//     this.lapsList = lapsList;
//     this.intervalId = null;
//     this.startTime = null;
//     this.currentTime = null;
//     this.deltaTime = null;
//     this.isActive = false;
//     this.isPaused = false;
//     this.tempTimerValue = 0;
//     this.delay = 0;
//     this.laps = [];
//     this.btnStart = null;
//     this.btnReset = null;
//     this.btnTakeLap = null;
//     this.timeBox = null;
//     this.creteBase();
//     this.addHandlers();
//   }

//   addHandlers() {
//     this.btnStart.addEventListener('click', this.startTimer.bind(this));
//     this.btnReset.addEventListener('click', this.resetTimer.bind(this));
//     this.btnTakeLap.addEventListener('click', this.addCurrentTimerValue.bind(this));
//   }

//   creteBase() {
//     this.btnStart = this.createBtn([false, 'Start', 'btn', 'btn--green']);
//     this.btnReset = this.createBtn([true, 'Reset', 'btn', 'btn--red', 'btn--disabled']);
//     this.btnTakeLap = this.createBtn([false, 'Lap', 'btn', 'btn--transparent']);
//     this.timeBox = this.createTimeBox();
//     this.parent.append(
//       this.timeBox,
//       this.btnStart,
//       this.btnTakeLap,
//       this.btnReset
//     );
//   }

//   createTimeBox() {
//     const timeBox = document.createElement('p');
//     timeBox.classList.add('time');
//     timeBox.textContent = '00:00.0';
//     return timeBox;
//   }

//   createBtn([disabled, text, ...args]) {
//     const btn = document.createElement('button');
//     args.forEach(item => btn.classList.add(item));
//     btn.textContent = text;
//     btn.disabled = disabled;
//     return btn;
//   }

//   startTimer() {
//     if (!this.isActive) {
//       this.isActive = true;
//       this.toggleResetBtn();
//       this.startTime = Date.now();
//       this.intervalId = setInterval(this.updateTime.bind(this), 100);
//       this.changeToPauseBtn();
//       return;
//     }
//     if (this.isActive && !this.isPaused) {
//       this.isPaused = true;
//       this.setPause();
//       this.changeToContinueBtn();
//       return;
//     }
//     if (this.isActive && this.isPaused) {
//       this.isPaused = false;
//       this.setContinue();
//       this.changeToPauseBtn();
//     }
//   }

//   resetTimer() {
//     this.isActive = false;
//     this.isPaused = false;
//     this.startTime = null;
//     this.deltaTime = null;
//     this.delay = 0;
//     clearInterval(this.intervalId);
//     this.setUpdatedTime(0);
//     this.changeToStartBtn();
//     this.toggleResetBtn();
//   }

//   setPause() {
//     this.tempTimerValue = Date.now();
//     clearInterval(this.intervalId);
//   }

//   setContinue() {
//     const currentDelayTime = Date.now();
//     this.delay += currentDelayTime - this.tempTimerValue;
//     this.intervalId = setInterval(this.updateTime.bind(this), 100);
//   }

//   updateTime() {
//     this.currentTime = Date.now() - this.delay;
//     this.deltaTime = this.currentTime - this.startTime;
//     this.setUpdatedTime(this.deltaTime);
//   }

//   setUpdatedTime(deltaTime) {
//     this.timeBox.textContent = this.getTimeString(deltaTime);
//   }

//   getTimeString(deltaTime) {
//     const date = new Date(deltaTime);
//     const min = date.getMinutes();
//     const sec = date.getSeconds();
//     const ms = Number.parseInt(date.getMilliseconds() / 100);
//     let result = `${min}:${sec}.${ms}`;
//     if (min < 10) {
//       result = `0${min}:${sec}.${ms}`;
//     }
//     if (sec < 10) {
//       result = `${min}:0${sec}.${ms}`;
//     }
//     if (min < 10 && sec < 10) {
//       result = `0${min}:0${sec}.${ms}`;
//     }
//     return result;
//   }

//   changeToPauseBtn() {
//     this.btnStart.textContent = 'Pause';
//     this.btnStart.classList.remove('btn--green');
//     this.btnStart.classList.remove('btn--blue');
//     this.btnStart.classList.add('btn--yellow');
//   }

//   changeToContinueBtn() {
//     this.btnStart.textContent = 'Continue';
//     this.btnStart.classList.remove('btn--yellow');
//     this.btnStart.classList.add('btn--blue');
//   }

//   changeToStartBtn() {
//     this.btnStart.textContent = 'Start';
//     this.btnStart.classList.remove('btn--yellow');
//     this.btnStart.classList.remove('btn--blue');
//     this.btnStart.classList.add('btn--green');
//   }

//   toggleResetBtn() {
//     let isDisabled = this.btnReset.disabled;
//     if (isDisabled) {
//       isDisabled = false;
//       this.btnReset.classList.remove('btn--disabled');
//     } else {
//       isDisabled = true;
//       this.btnReset.classList.add('btn--disabled');
//     }
//     this.btnReset.disabled = isDisabled;
//   }

//   addCurrentTimerValue() {
//     const currentTimerValue = this.timeBox.textContent;
//     this.laps.push(currentTimerValue);
//     const li = this.createLi(currentTimerValue);
//     this.lapsList.appendChild(li);
//   }

//   createLi(currentTimerValue) {
//     const li = document.createElement('li');
//     li.textContent = currentTimerValue;
//     return li;
//   }
// }

// // Пример использования

// const parent = document.querySelector('.js-parent');
// const lapsList = document.querySelector('.js-laps');

// new Stopwatch({ parent, lapsList });
