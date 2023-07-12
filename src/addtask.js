function addTask(description, taskList) {
  const listItem = document.createElement('li');
  listItem.className = 'list';
  taskList.appendChild(listItem);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkboxtick';
  listItem.appendChild(checkbox);

  const p = document.createElement('p');
  p.innerHTML = description;
  p.className = 'content';
  listItem.appendChild(p);

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-ellipsis-vertical';
  listItem.appendChild(icon);

  function editFunction(e) {
    icon.className = 'fa-solid fa-trash-can';
    const clickedBtn = e.target;
    const parent = clickedBtn.parentNode;
    const content = parent.querySelector('.content');

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = content.innerHTML;
    inputField.className = 'edit-field';
    inputField.style.backgroundColor = 'lightyellow';
    parent.style.backgroundColor = 'lightyellow';

    parent.replaceChild(inputField, content);

    inputField.addEventListener('blur', () => {
      content.innerHTML = inputField.value;
      parent.replaceChild(content, inputField);
      parent.style.backgroundColor = 'white';
      icon.className = 'fa-solid fa-ellipsis-vertical';
      icon.removeEventListener('click', deleteTask);
      icon.addEventListener('click', editFunction);
    });

    icon.removeEventListener('click', editFunction);
    icon.addEventListener('click', deleteTask);
  }

  function deleteTask(e) {
    console.log('Trash icon was clicked');
  }

  icon.addEventListener('click', editFunction);
}

export default addTask;
