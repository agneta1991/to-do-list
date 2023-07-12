import './style.css';

const tasks = [
  {
    description: 'task1',
    completed: false,
    index: 0,
  },
  {
    description: 'task2',
    completed: false,
    index: 1,
  },
  {
    description: 'task3',
    completed: false,
    index: 2,
  },
];

const taskList = document.getElementById('taskList');

tasks.forEach((task) => {
  const listItem = document.createElement('li');
  listItem.className = 'list';
  taskList.appendChild(listItem);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkboxtick';
  listItem.appendChild(checkbox);

  const p = document.createElement('p');
  p.innerHTML = task.description;

  listItem.appendChild(p);

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-ellipsis-vertical';
  listItem.appendChild(icon);
});
