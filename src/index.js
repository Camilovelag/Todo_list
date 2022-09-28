import _ from 'lodash'; // eslint-disable-line
import './style.css';

import displayTasks from './modules/display.js';
import addTask from './modules/add.js';
import Task from './modules/task.js';

const taskList = document.querySelector('.task-list');
const form = document.querySelector('.form');



form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = Object.fromEntries(
    new FormData(e.target)
  )
  addTask(input.task);
  displayTasks();


});




// taskList.addEventListener('change', (e) => {
//   e.preventDefault();
//   alert('update');
// });

// modify below this line

// modify above this line
displayTasks();