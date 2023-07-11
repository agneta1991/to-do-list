import './style.css';

function component() {
  const element = document.createElement('ul');
  const element2 = document.createElement('li');
  element2.innerHTML = 'Helloooooooo';
  element.appendChild(element2);
  console.log(element);
  document.getElementById('containerDiv').appendChild(element);

  return element;
}

component();

const element = document.createElement('ul');
element.id = 'ul';
document.getElementById('containerDiv').appendChild(element);

const tasks = [
  {
    description: 'task1',
    completed: false,
    index: 0,
  },
];

for (let i = 0; i < tasks.length; i++) {
  const li = document.createElement('li');
  li.innerHTML = tasks[i].description;
  element.appendChild(li);
}