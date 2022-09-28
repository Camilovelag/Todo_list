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

    // try to split this into a function

    const deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
      let temp = parsedArr.filter((item) => item !== task);
      // set a function that reassigns the index of the remaining tasks
      parsedArr = temp;
      temp = parsedArr.map((item) => {
        item.index = parsedArr.indexOf(item) + 1;

        return item;
      });
    
      parsedArr = temp;

      localStorage.setItem('taskArr', JSON.stringify(parsedArr));
      taskList.removeChild(taskItem);
    });

    // fix how to display the new task array
    return taskList;
  }); 
}
