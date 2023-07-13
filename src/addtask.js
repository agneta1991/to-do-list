import { loadTasksFromStorage, saveTasksToStorage } from './localstorage.js';

function updateLocalStorage() {
  const taskListItems = Array.from(document.querySelectorAll('ul#taskList li'));
  const storedTasks = loadTasksFromStorage();

  const updatedTasks = taskListItems.map((li, index) => {
    const content = li.querySelector('.content');

    if (content && storedTasks[index]) { storedTasks[index].description = content.innerHTML; }

    return {
      description: content ? content.innerHTML : '',
      completed: storedTasks[index] ? storedTasks[index].completed : false,
      index: index + 1,
    };
  });

  storedTasks.splice(updatedTasks.length);

  updatedTasks.forEach((task, index) => {
    if (!storedTasks[index]) {
      storedTasks.push(task);
    }
  });

  saveTasksToStorage(storedTasks);
}

function addTask(task, taskList, tasks) {
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

    function updateTaskIndices(tasks) {
      tasks.forEach((task, index) => {
        task.index = index + 1;
      });
    }

    function deleteTask(tasks) {
      const listItem = this.parentNode;
      const taskList = listItem.parentNode;
      const taskIndex = Array.from(taskList.children).indexOf(listItem);
      taskList.removeChild(listItem);

      tasks.splice(taskIndex, 1);

      updateTaskIndices(tasks);
      updateLocalStorage(tasks);
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

    icon.addEventListener('click', () => {
      deleteTask.call(icon, tasks);
    });

    updateLocalStorage();
  }

  icon.addEventListener('click', editFunction);
}

export default addTask;