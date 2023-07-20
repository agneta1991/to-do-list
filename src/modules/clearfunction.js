import { updateLocalStorage, updateTaskIndices } from './localstorage.js';

function clearFunction(tasks) {
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

export default clearFunction;