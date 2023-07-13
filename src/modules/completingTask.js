function completingTask(checkbox, task) {
    if (checkbox.checked) {
      checkbox.parentNode.classList.add('completed');
    } else {
      checkbox.parentNode.classList.remove('completed');
    }
  
    if (task.completed) {
      checkbox.checked = true;
      checkbox.parentNode.classList.add('completed');
    }
  }
  
  export { completingTask };
  