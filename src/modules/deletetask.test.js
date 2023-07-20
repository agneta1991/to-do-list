const { JSDOM } = require('jsdom');
import deleteTask from './deletetask';
import { updateTaskIndices, updateLocalStorage } from "./addtask";

jest.mock('./addtask', () => ({
    updateTaskIndices: jest.fn(),
    updateLocalStorage: jest.fn(),
  }));

describe('deleteTask', () => {
    let listItem;
    let tasks;
    let taskList;
  
    beforeEach(() => {
      const dom = new JSDOM();
      global.document = dom.window.document;
  
      taskList = document.createElement('ul');
      listItem = document.createElement('li');
      taskList.appendChild(listItem);
      tasks = [{
        description: 'Task 1',
        completed: false,
        index: 0,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 1,
      },
    ];
    });
  
    afterEach(() => {
      global.document = undefined;
    });
  
    test('delete exactly one <li> element', () => {
      const taskIndex =[0,1]
  
      deleteTask(listItem, tasks);
  
      const liElements = taskList.querySelectorAll('li');
  
      expect(liElements.length).toBe(0);
      expect(updateTaskIndices).toHaveBeenCalledWith(tasks);
      expect(updateLocalStorage).toHaveBeenCalledWith(tasks);
    });
  
  })