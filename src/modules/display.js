export default function displayTasks(e) {

  const taskList = document.querySelector('.task-list');
  const parsedArr = JSON.parse(localStorage.getItem('taskArr')) || [];

  taskList.innerHTML = '';
  parsedArr.map((task) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item', 'b-bottom', 'box');
    taskItem.innerHTML = `<input type="checkbox" class="checkbox">
    <span class="task-text full">${task.description}</span>
    <button class="delete btn">X</button>`;
    taskList.appendChild(taskItem);
  }); 
}
