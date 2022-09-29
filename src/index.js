import _ from 'lodash'; // eslint-disable-line
import './style.css';
import displayTasks from './modules/display.js';
import addTask from './modules/add.js';
import clearAll from './modules/clearAll.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = Object.fromEntries(new FormData(e.target));
  addTask(input.task);
  displayTasks();
});

const clrAllBtn = document.querySelector('.clr-all');

clrAllBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearAll();
  displayTasks();
});

displayTasks();