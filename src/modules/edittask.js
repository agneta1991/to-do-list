import { updateLocalStorage, updateTaskIndices } from "./localstorage";
import deleteTask from "./deletetask";
import { returnTask } from "./addtask";

function editFunction(icon, e, tasks) {
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

    inputField.addEventListener('blur', (event) => {
      let task = returnTask(tasks, event);
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
      deleteTask(listItem, tasks);
    });

    updateLocalStorage(tasks);
  }

  export default editFunction;