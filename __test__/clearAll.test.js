import mockLocalStorage from '../__mocks__/mockLocalStorage.js';
import displayTasks from '../src/modules/display.js';
import clearAll from '../src/modules/clearAll.js';

describe('Clear completed tasks', () => {
  test('Clear all completed tasks - tasks checked', () => {
    // Arrange
    mockLocalStorage();
    const checkbox = document.querySelector('.checkbox');
    checkbox.click();

    // Act
    clearAll();
    displayTasks();

    // Assert
    const list = document.querySelectorAll('textarea');
    expect(list).toHaveLength(0);
  });
});