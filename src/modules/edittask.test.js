import editFunction from "./edittask";
import { updateLocalStorage, updateTaskIndices } from "./localstorage";
import deleteTask from "./deletetask";
import { returnTask } from "./addtask";
const { JSDOM } = require('jsdom');

jest.mock('./localstorage', () => ({
  updateTaskIndices: jest.fn(),
  updateLocalStorage: jest.fn(),
}));

jest.mock('./addtask', () => ({
    returnTask: jest.fn(),
}));

jest.mock('./deletetask', () => ({
    deleteTask: jest.fn(),
}))

describe('editFunction', () => {
  let icon;
  let e;
  let tasks;
  let listItem;
  let inputField;

  beforeEach(() => {
    
    const dom = new JSDOM();
    global.document = dom.window.document;
    listItem = document.createElement('li');
    inputField = document.createElement('p');
    tasks = [{
        description: 'old task',
        completed: false,
        index: 0
    }];
  });

  afterEach(() => {
    global.document = undefined;
  });

  test('replaces old description with new', () => {
    
    const inputField = document.createElement('input');
    const icon = document.createElement('i');
    icon.className = "fa-solid fa-trash-can";

    listItem.appendChild(inputField);
    listItem.appendChild(icon)

    editFunction(icon, e, tasks, listItem);

    inputField.value = 'Updated Task 1';

    const blurEvent = new FocusEvent('blur', { relatedTarget: null });
    inputField.dispatchEvent(blurEvent);


    expect(tasks[0].description).toBe('Updated Task 1');
    expect(updateTaskIndices).toHaveBeenCalledWith(tasks);
    expect(updateLocalStorage).toHaveBeenCalledWith(tasks);
    expect(deleteTask).toHaveBeenCalledWith(listItem, tasks);
    expect(returnTask).toHaveBeenCalledWith(tasks, event);
  });
});