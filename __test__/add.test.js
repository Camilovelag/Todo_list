import addTask from '../src/modules/add.js';
import displayTasks from '../src/modules/display.js';

describe('Add task', () => {
  test('Add new task', () => {
    // Arrange
    document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required> <ul class="task-list"> </ul>';
    const task1 = 'New task 1 - lorem ipsum dolor sit amet';

    // Act
    addTask(task1);
    displayTasks();

    // Assert
    const list = document.querySelectorAll('textarea');
    expect(list).toHaveLength(1);
  });
});