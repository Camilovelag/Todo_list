import _ from 'lodash'; // eslint-disable-line
import './style.css';

import displayTasks from './modules/display.js';
import addTask from './modules/add.js';
import Task from './modules/task';

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

// class Task {
//   constructor(index, description) {
//     this.index = index;
//     this.description = description;
//     this.completed = false;
//   }
// }

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = Object.fromEntries(
    new FormData(e.target)
  )


  const parsedArr = JSON.parse(localStorage.getItem('taskArr'));
  const counter = parsedArr.length + 1;

  const newTask = new Task(counter, input.task);
  parsedArr.push(newTask);
  localStorage.setItem('taskArr', JSON.stringify(parsedArr));

  const taskfield = document.querySelector('.text-field');
  taskfield.value = '';
  displayTasks();
});




// modify above this line
displayTasks();