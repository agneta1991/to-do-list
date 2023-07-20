import './style.css';
import { addTask } from './modules/addtask.js';
import {
  updateTaskIndices, updateLocalStorage, saveTasksToStorage, loadTasksFromStorage,
} from './modules/localstorage.js';
import editFunction from './modules/edittask';

let tasks = loadTasksFromStorage();

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('input');

function clearFunction() {
  const individualTasks = tasks.filter((task) => task.completed === true);
  const indexes = individualTasks.map((task) => task.index);
  indexes.reverse().forEach((indexToDelete) => {
    tasks.splice(indexToDelete, 1);
  });
  updateTaskIndices(tasks);
  updateLocalStorage(tasks);

  individualTasks.forEach((task) => {
    const taskElement = document.getElementById(`task-${task.index}`);
    if (taskElement) {
      taskElement.remove();
    }
  });
}

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
        index: tasks.length,
      };

      tasks.push(newTask);
      taskInput.value = '';
      addTask(newTask, taskList, tasks);

      saveTasksToStorage(tasks);
    }
  }
});

const btn = document.getElementById('clearBtn');
btn.addEventListener('click', clearFunction);

document.addEventListener('DOMContentLoaded', () => {
  tasks = loadTasksFromStorage();
  addTasks();
});