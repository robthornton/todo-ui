import React from 'react';
import {render, shallow} from 'enzyme';

import {TodoList} from './TodoList';

describe('TodoList component', () => {
  const tasks = [
    {id: 1, task: 'Example 0', completed: false},
    {id: 2, task: 'Example 1', completed: true},
    {id: 3, task: 'Example 2', completed: false}
  ];

  it('renders without crashing', () => {
    const completeFunction = jest.fn();
    const deleteFunction = jest.fn();
    const wrapper = render(
      <TodoList
        todos={[]}
        onComplete={completeFunction}
        onDelete={deleteFunction}
      />
    );
    expect(wrapper).toBeTruthy();
  });

  it('renders with no list items with an empty list', () => {
    const completeFunction = jest.fn();
    const deleteFunction = jest.fn();
    const wrapper = render(
      <TodoList
        todos={[]}
        onComplete={completeFunction}
        onDelete={deleteFunction}
      />
    );
    const listItems = wrapper.find('li');
    expect(listItems).toHaveLength(0);
  });

  it('list has "task-list" class', () => {
    const completeFunction = jest.fn();
    const deleteFunction = jest.fn();
    const wrapper = shallow(
      <TodoList
        todos={[]}
        onComplete={completeFunction}
        onDelete={deleteFunction}
      />
    );
    const ul = wrapper.find('ul');
    expect(ul.hasClass('task-list')).toBe(true);
  });

  it('should have three todos', () => {
    const completeFunction = jest.fn();
    const deleteFunction = jest.fn();
    const wrapper = render(
      <TodoList
        todos={tasks}
        onComplete={completeFunction}
        onDelete={deleteFunction}
      />
    );
    const listItems = wrapper.find('li');
    expect(listItems).toHaveLength(3);
  });
});
