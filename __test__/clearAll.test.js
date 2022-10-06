import addTask from '../src/modules/add.js';
import displayTasks from '../src/modules/display.js';
import clearAll from '../src/modules/clearAll.js';

test('Clear completed tasks', () => {
  // Arrange
  document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required> <ul class="task-list"> </ul>';
  const task1 = 'New task 1 - lorem ipsum dolor sit amet';
  addTask(task1);
  displayTasks();
  const checkbox = document.querySelector('.checkbox');
  checkbox.click();

  // Act
  clearAll();
  displayTasks();

  // Assert
  const list = document.querySelectorAll('textarea');
  expect(list).toHaveLength(0);
});