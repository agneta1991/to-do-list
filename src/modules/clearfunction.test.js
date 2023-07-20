import clearFunction from './clearfunction.js';

const { JSDOM } = require('jsdom');

jest.mock('./localstorage', () => ({
  updateLocalStorage: jest.fn(),
  updateTaskIndices: jest.fn(),
}));

describe('clearFunction', () => {
  let tasks;

  beforeEach(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;

    tasks = [
      {
        description: 'Task 0',
        completed: true,
        index: 0,
      },
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: true,
        index: 2,
      },
    ];
  });

  afterEach(() => {
    global.document = undefined;
  });

  test('should remove completed tasks from the tasks array', () => {
    clearFunction(tasks);

    expect(tasks).toEqual([
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
    ]);
  });
});
