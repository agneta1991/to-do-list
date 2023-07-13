import './style.css';
import addTask from './modules/addtask.js';
import { saveTasksToStorage, loadTasksFromStorage } from './modules/localstorage.js'

let tasks = loadTasksFromStorage();

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('input');

function addTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    addTask(task, taskList, tasks);
  });
}

taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const description = taskInput.value.trim();

    if (description !== '') {
      const newTask = {
        description,
        completed: false,
        index: tasks.length + 1,
      };

      tasks.push(newTask);
      taskInput.value = '';
      addTask(newTask, taskList, tasks);

      saveTasksToStorage(tasks);
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  tasks = loadTasksFromStorage();
  addTasks();
});
