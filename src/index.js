import _ from 'lodash'; // eslint-disable-line
import './style.css';

import displayTasks from './modules/display.js';
import addTask from './modules/add.js';
import Task from './modules/task.js';

const taskList = document.querySelector('.task-list');

const taskArr = [
  {
    index: 1,
    description: 'Task 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false,
  },

];

// localStorage.setItem('taskArr', JSON.stringify(taskArr));

// modify below this line

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = Object.fromEntries(
    new FormData(e.target)
  )

  addTask(input.task);
  displayTasks();
});

// modify above this line
displayTasks();