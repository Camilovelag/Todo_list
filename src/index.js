import _ from 'lodash'; // eslint-disable-line
import './style.css';

const taskList = document.querySelector('.task-list');

const taskArr = [
  {
    index: 1,
    description: 'Task 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false,
  },
  {
    index: 2,
    description: 'Task 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false,
  },
  {
    index: 3,
    description: 'Task 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false,
  },
  {
    index: 4,
    description: 'Task 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false,
  },
  {
    index: 5,
    description: 'Task 5 Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false,
  },
];

taskList.innerHTML = taskArr.map((task) => `<li id="task-${task.index}" class="task-item b-bottom box">
  <input type="checkbox" class="checkbox">
  <span class="task-text">${task.description}</span>
  <button class="delete">X</button>
</li>`).join('');