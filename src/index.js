import _ from 'lodash'; // eslint-disable-line
import './style.css';
import displayTasks from './modules/display.js';
import addTask from './modules/add.js';

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

  let parsedArr = JSON.parse(localStorage.getItem('taskArr'));
  let temp = parsedArr.filter((item) => item.completed === false);
  localStorage.setItem('taskArr', JSON.stringify(temp));
  displayTasks(); 
});



  



displayTasks();