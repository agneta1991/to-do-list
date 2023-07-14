import { updateLocalStorage } from './addtask.js';

function completionFunction(checkbox, tasks, task){
   
    task.completed = !task.completed;
    if (task.completed){
        checkbox.target.parentElement.style.textDecoration = 'line-through';
        console.log(checkbox.target.parentElement.classList)
    } else {
        checkbox.target.parentElement.style.textDecoration = 'none';
    }
    updateLocalStorage(tasks);
}

function clearFunction(tasks){
    console.log(tasks);
}

export { completionFunction, /*clearFunction*/ };


// const clearAllTasks = () => {
//     tasks = tasks.filter((task) => !task.completed);
//     tasks.forEach((task, i) => {
//       task.index = i + 1;
//     });
//     renderTasks();
//   };

//   clearAll.addEventListener('click', clearAllTasks);

//   getData();
