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


export { completionFunction };

