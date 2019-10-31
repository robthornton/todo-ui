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
      render(<TaskList todos={tasks.slice(0, 1)} />, container);
    });
    const ul = container.getElementsByTagName('ul')[0];
    expect(ul.children).toHaveLength(1);
  });

  it('renders three todos', () => {
    act(() => {
      render(<TaskList todos={tasks} />, container);
    });
    const ul = container.getElementsByTagName('ul')[0];
    expect(ul.children).toHaveLength(3);
  });
});
