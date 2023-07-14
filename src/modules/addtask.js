import completionFunction from './completingTask.js';
import { updateLocalStorage } from './localstorage.js';

function returnTask(tasks, event) {
  const listItem = event.target.parentNode;
  const taskList = listItem.parentNode;
  const taskIndex = Array.from(taskList.children).indexOf(listItem);

  return tasks[taskIndex];
}

function updateTaskIndices(tasks) {
  tasks.forEach((task, index) => {
    task.index = index;
  });
}

let taskIdCounter = 0;

function addTask(task, taskList, tasks) {
  const listItem = document.createElement('li');
  listItem.style.textDecoration = task.completed ? 'line-through' : 'none';
  listItem.className = 'list';
  listItem.id = `task-${taskIdCounter}`;
  taskIdCounter += 1;
  taskList.appendChild(listItem);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkboxtick';
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', (event) => {
    task = returnTask(tasks, event);
    completionFunction(event, tasks, task);
  });
  listItem.appendChild(checkbox);

  const p = document.createElement('p');
  p.innerHTML = task.description;
  p.className = 'content';
  listItem.appendChild(p);

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-ellipsis-vertical';
  listItem.appendChild(icon);

  function editFunction(e) {
    icon.className = 'fa-solid fa-trash-can';
    const clickedBtn = e.target;
    const parent = clickedBtn.parentNode;
    const content = parent.querySelector('.content');

    if (!content) return;

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = content.innerHTML;
    inputField.className = 'edit-field';
    inputField.style.backgroundColor = 'lightyellow';
    parent.style.backgroundColor = 'lightyellow';

    parent.replaceChild(inputField, content);
    updateTaskIndices(tasks);

    function deleteTask(tasks) {
      const listItem = this.parentNode;
      const taskList = listItem.parentNode;
      const taskIndex = Array.from(taskList.children).indexOf(listItem);
      taskList.removeChild(listItem);

      tasks.splice(taskIndex, 1);

      updateTaskIndices(tasks);
      updateLocalStorage(tasks);
    }

    inputField.addEventListener('blur', (event) => {
      task = returnTask(tasks, event);
      task.description = inputField.value;
      content.innerHTML = inputField.value;
      parent.replaceChild(content, inputField);
      parent.style.backgroundColor = 'white';
      icon.className = 'fa-solid fa-ellipsis-vertical';
      icon.removeEventListener('click', deleteTask);
      icon.addEventListener('click', editFunction);
      updateLocalStorage(tasks);
    });

    icon.removeEventListener('click', editFunction);

    icon.addEventListener('click', () => {
      deleteTask.call(icon, tasks);
    });

    updateLocalStorage(tasks);
  }

  icon.addEventListener('click', editFunction);
}

export { returnTask, updateLocalStorage, updateTaskIndices };
export default addTask;
