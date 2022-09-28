export default function displayTasks(e) {

  const taskList = document.querySelector('.task-list');
  const parsedArr = JSON.parse(localStorage.getItem('taskArr'));

  taskList.innerHTML = parsedArr.map((task) => `<li id="task-${task.index}" class="task-item b-bottom box">
    <input type="checkbox" class="checkbox">
    <span class="task-text">${task.description}</span>
    <button class="delete">X</button>
  </li>`).join('');
}