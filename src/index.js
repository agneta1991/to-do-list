import './style.css';

const taskInput = document.getElementById('input');
const tasks = [];

taskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const description = taskInput.value;

        const newTask = {
            description: description,
            completed: false,
            index: tasks.length + 1,
        };

        tasks.push(newTask);
        taskInput.value = '';
        addTasks();

    }
})


function addTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.className = 'list';

        const insideList = document.createElement('label');
        insideList.className = 'listItemsLabel';
        insideList.for = 'myCheck';
        insideList.innerHTML = task.description;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkboxtick';


        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                insideList.classList.add('completed');
            } else {
                insideList.classList.remove('completed');
            }
        });

        if (task.completed) {
            checkbox.checked = true;
            insideList.classList.add('completed');
          }

        listItem.appendChild(checkbox);
        listItem.appendChild(insideList);
        taskList.appendChild(listItem);

    });
}



document.addEventListener('DOMContentLoaded', addTasks);
