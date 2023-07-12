const saveTasksToStorage = (tasks) => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  const loadTasksFromStorage = () => {
    const storedTasks = window.localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };
  
  export { saveTasksToStorage, loadTasksFromStorage };