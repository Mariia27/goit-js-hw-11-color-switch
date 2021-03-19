
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
const switching = {

  isActive: true,
  startSwitching() {
    if (this.isActive) {
      return
    }
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
    }, 1000)
   },
  stopSwitching(){
    clearInterval(this.intervalId);
    this.isActive = false;
  },

}
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
refs.startBtn.addEventListener('click', 
  switching.startSwitching.bind(switching)
);
refs.stopBtn.addEventListener('click', switching.stopSwitching.bind(switching));