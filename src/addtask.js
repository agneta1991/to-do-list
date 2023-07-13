import { loadTasksFromStorage } from "./localstorage.js";
import { saveTasksToStorage } from "./localstorage.js";

function addTask(task, taskList) {
  const listItem = document.createElement('li');
  listItem.className = 'list';
  taskList.appendChild(listItem);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkboxtick';
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

    function deleteTask() {
      parent.remove();
      updateLocalStorage();
    }

    inputField.addEventListener('blur', () => {
      content.innerHTML = inputField.value;
      parent.replaceChild(content, inputField);
      parent.style.backgroundColor = 'white';
      icon.className = 'fa-solid fa-ellipsis-vertical';
      icon.removeEventListener('click', deleteTask);
      icon.addEventListener('click', editFunction);
      updateLocalStorage();
    });

    icon.removeEventListener('click', editFunction);
    icon.addEventListener('click', deleteTask);
    updateLocalStorage();
  }

  icon.addEventListener('click', editFunction);
}

function updateLocalStorage() {
  const taskListItems = Array.from(document.querySelectorAll('ul#taskList li'));
  const storedTasks = loadTasksFromStorage();

  taskListItems.forEach((li, index) => {
    const content = li.querySelector('.content');
    if (content && storedTasks[index]) {
      storedTasks[index].description = content.innerHTML;
    }
  });

  saveTasksToStorage(storedTasks);
}

export default addTask;