import './style.css';
import addTask from './addtask.js';
import { saveTasksToStorage, loadTasksFromStorage } from './localstorage.js';

const tasks = [];

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('input');

function addTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    addTask(task.description, taskList);
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
      addTask(newTask, taskList);

      saveTasksToStorage(tasks);
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  addTasks();
});
