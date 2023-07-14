import './style.css';
import  addTask from './modules/addtask.js';
import { updateTaskIndices, updateLocalStorage } from './modules/addtask.js';
import { saveTasksToStorage, loadTasksFromStorage } from './modules/localstorage.js';
import { indexOf } from 'lodash';
/*import { clearFunction } from './modules/completingTask.js';*/

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

function clearFunction() {
  const individualTasks = tasks.filter(task => task.completed === true);
  const indexes = individualTasks.map(task => task.index);
debugger
  indexes.reverse().forEach(indexToDelete => {
    tasks.splice(indexToDelete, 1);
  });

  updateTaskIndices(tasks);
  updateLocalStorage(tasks);
  console.log(tasks);
}


document.addEventListener('DOMContentLoaded', () => {
  tasks = loadTasksFromStorage();
  addTasks();
});