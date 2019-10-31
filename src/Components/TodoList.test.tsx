import React from 'react';
import TaskList from './TodoList';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

let container: HTMLElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

describe('TodoList component', () => {
  const tasks = [
    {id: 0, task: 'Example 0', completed: false},
    {id: 1, task: 'Example 1', completed: true},
    {id: 2, task: 'Example 2', completed: false}
  ];

  it('renders without crashing', () => {
    act(() => {
      render(<TaskList todos={[]} />, container);
    });
    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(0);
  });

  it('list has correct class', () => {
    act(() => {
      render(<TaskList todos={[]} />, container);
    });
    const ul = container.querySelector('ul');
    expect(ul !== null ? ul.classList.contains('task-list') : false).toBe(true);
  });

  it('renders three todos', () => {
    act(() => {
      render(<TaskList todos={tasks} />, container);
    });
    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(3);
  });
});
