export default function displayTasks(e) {

  const taskList = document.querySelector('.task-list');
  let parsedArr = JSON.parse(localStorage.getItem('taskArr')) || [];

  taskList.innerHTML = '';
  parsedArr.map((task) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item', 'b-bottom', 'box');
    taskItem.innerHTML = `<input type="checkbox" class="checkbox">
    <span class="task-text full">${task.description}</span>
    <button type="button" class="delete btn">X</button>`;
    taskList.appendChild(taskItem);

    const deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
      let temp = parsedArr.filter((item) => item !== task);
      parsedArr = temp;
      localStorage.setItem('taskArr', JSON.stringify(parsedArr));
    });

    // fix how to display the new task array
    return taskList;
  }); 
}
