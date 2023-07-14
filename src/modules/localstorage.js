const saveTasksToStorage = (tasks) => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasksFromStorage = () => {
  const storedTasks = window.localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
};

function updateLocalStorage(tasks) {
  localStorage.clear();
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

export { saveTasksToStorage, loadTasksFromStorage, updateLocalStorage };