
"use strict";
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}
  let intervalId = null;


function start() {
    if (intervalId) return
   intervalId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
    }, 1000)
  refs.stopBtn.disabled = true;
};

  function stop(){
    clearInterval(intervalId);
    refs.stopBtn.disabled = false;
};
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
refs.startBtn.addEventListener('click',start);
refs.stopBtn.addEventListener('click', stop);