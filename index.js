
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
 
  function stop(){
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.stopBtn.disabled = true;
};


function start() {
  this.isActive = true;
    let invalidId = null;
    if (invalidId) {
      return
    }
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
    }, 1000)
  refs.stopBtn.disabled = false;
};
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
refs.startBtn.addEventListener('click',start);
refs.stopBtn.addEventListener('click', stop);