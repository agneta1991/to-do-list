import completionFunction from './completingTask.js';
import { updateLocalStorage, updateTaskIndices } from './localstorage.js';
import deleteTask from './deletetask.js';
import editFunction from './edittask.js';


function returnTask(tasks, event) {
  const listItem = event.target.parentNode;
  const taskList = listItem.parentNode;
  const taskIndex = Array.from(taskList.children).indexOf(listItem);
  return tasks[taskIndex];
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

   icon.addEventListener('click', (e) => {
    editFunction(icon, e, tasks, listItem);
  });
}

export {
  addTask, returnTask, updateLocalStorage, updateTaskIndices,
};
