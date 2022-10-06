import addTask from '../src/modules/add.js';
import displayTasks from '../src/modules/display.js';

export default function mockLocalStorage() {
  document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required> <ul class="task-list"> </ul>';
  const task1 = 'New task 1 - lorem ipsum dolor sit amet';
  addTask(task1);
  displayTasks();
}