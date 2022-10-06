import mockLocalStorage from '../__mocks__/mockLocalStorage.js';
import displayTasks from '../src/modules/display.js';

describe('Update description', () => {
  test('Update task description after clicking on textarea', () => {
    // Arrange
    mockLocalStorage();
    const textArea = document.querySelector('.task-text');
    textArea.value = 'Task1 updated';

    // Act
    const taskForm = document.querySelector('.task-form');
    taskForm.submit();
    displayTasks();

    // Assert
    const result = textArea.value;
    expect(result).toBe('Task1 updated');
  });
});