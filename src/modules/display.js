export default function displayTasks() {
  const taskList = document.querySelector('.task-list');

  // display stored tasks

  let parsedArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  taskList.innerHTML = '';
  parsedArr.map((task) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<form class="task-form b-bottom box">
    <input name="completed" type="checkbox" class="checkbox">
    <textarea name="description" rows="1" class="task-text full">${task.description}</textarea>
    <button type="button" class="delete btn">
    <img src="https://cdn-icons-png.flaticon.com/512/542/542724.png" alt="update-icon">
    </button>
    <button type="submit" class="update btn">
    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828743.png" alt="update-icon">
    </button>
    </form>`;
    taskList.appendChild(taskItem);

    const deleteBtn = taskItem.querySelector('.delete');
    const updateBtn = taskItem.querySelector('.update');
    const taskText = taskItem.querySelector('.task-text');
    const taskForm = taskItem.querySelector('.task-form');
    const checkbox = taskItem.querySelector('.checkbox');

    updateBtn.style.display = 'none';

    checkbox.checked = task.completed;
    if (task.completed) {
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.textDecoration = 'none';
    }

    // Update checkbox status

    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      localStorage.setItem('taskArr', JSON.stringify(parsedArr));

      if (task.completed) {
        taskText.style.textDecoration = 'line-through';
      } else {
        taskText.style.textDecoration = 'none';
      }
    });

    // Update task description

    taskText.addEventListener('click', (e) => {
      e.preventDefault();
      updateBtn.style.display = 'block';
      deleteBtn.style.display = 'none';
      taskText.style.backgroundColor = '#f4f4f4';
    });

    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = Object.fromEntries(new FormData(e.target));
      task.description = input.description;
      localStorage.setItem('taskArr', JSON.stringify(parsedArr));
      updateBtn.style.display = 'none';
      deleteBtn.style.display = 'block';
      taskText.style.backgroundColor = '#fff';
    });

    // Delete task

    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let temp = parsedArr.filter((item) => item !== task);
      parsedArr = temp;
      temp = parsedArr.map((item) => {
        item.index = parsedArr.indexOf(item) + 1;
        return item;
      });
      parsedArr = temp;
      localStorage.setItem('taskArr', JSON.stringify(parsedArr));
      taskList.removeChild(taskItem);
    });
    return taskList;
  });
}