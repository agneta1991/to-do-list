import './style.css';

const tasks = [];

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('input');

function addTask(description) {
  const listItem = document.createElement('li');
  listItem.className = 'list';
  taskList.appendChild(listItem);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkboxtick';
  listItem.appendChild(checkbox);

  const p = document.createElement('p');
  p.innerHTML = description;
  p.className = 'content';
  listItem.appendChild(p);

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-ellipsis-vertical';
  listItem.appendChild(icon);
    icon.addEventListener('click', editFunction);

    function editFunction(e) {
        const clickedBtn = e.target;
        const parent = clickedBtn.parentNode;
        const content = parent.querySelector('.content');
        const newContent = prompt('Edit Task');
        if (newContent !== null) {
          content.innerHTML = newContent;
        }
      }
    }

function addTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    addTask(task.description);
  });
}

taskInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const description = taskInput.value.trim();

    if (description !== '') {
      const newTask = {
        description: description,
        completed: false,
        index: tasks.length + 1,
      };

      tasks.push(newTask);
      taskInput.value = '';
      addTask(description);
    }
  }
});



/*function removeTask() {
  const dotIcon = document.querySelectorAll('.fa-ellipsis-vertical');
  dotIcon.forEach((individualDots) => {
    individualDots.addEventListener('click', removeListItem);
  });

  function removeListItem(event) {
    alert('yay');
    /*const listItem = event.target.parentNode;
    listItem.remove();
  }
}*/

document.addEventListener('DOMContentLoaded', function () {
  addTasks();
});
