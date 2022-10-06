import mockLocalStorage from '../__mocks__/mockLocalStorage.js';
import displayTasks from '../src/modules/display.js';

describe('Update task', () => {
  test('Update checked task', () => {
    // Arrange
    mockLocalStorage();

    // Act
    const checkbox = document.querySelector('.checkbox');
    checkbox.click();
    displayTasks();

    // Assert
    const result = checkbox.checked;
    expect(result).toBe(true);
  });
});