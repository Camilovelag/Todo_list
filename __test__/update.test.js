import addTask from '../src/modules/add.js';
import displayTasks from '../src/modules/display.js';

describe('Update task', () => {
  test('Update checked task', () => {
    // Arrange
    document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required> <ul class="task-list"> </ul>';
    const task1 = 'New task 1 - lorem ipsum dolor sit amet';
    addTask(task1);
    displayTasks();

    // Act
    const checkbox = document.querySelector('.checkbox');
    checkbox.click();

    // Assert
    const result = checkbox.checked;
    expect(result).toBe(true);
  });

  test('Update task description', () => {
    // Arrange
    const textArea = document.querySelector('.task-text');
    textArea.value = 'Task1 updated';

    // Act
    const taskForm = document.querySelector('.task-form');
    taskForm.submit();

    // Assert
    const result = textArea.value;
    expect(result).toBe('Task1 updated');
  });
});