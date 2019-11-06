import React from 'react';
import {render, shallow} from 'enzyme';
import TaskList from './TodoList';

describe('TodoList component', () => {
  const tasks = [
    {id: 0, task: 'Example 0', completed: false},
    {id: 1, task: 'Example 1', completed: true},
    {id: 2, task: 'Example 2', completed: false}
  ];

  it('renders without crashing', () => {
    const wrapper = render(<TaskList todos={[]} />);
    const listItems = wrapper.find('li');
    expect(listItems).toHaveLength(0);
  });

  it('list has "task-list" class', () => {
    const wrapper = shallow(<TaskList todos={[]} />);
    const ul = wrapper.find('ul');
    expect(ul.hasClass('task-list')).toBe(true);
  });

  it('should have three todos', () => {
    const wrapper = render(<TaskList todos={tasks} />);
    const listItems = wrapper.find('li');
    expect(listItems).toHaveLength(3);
  });

  it('should have two todos after deleting one', () => {
    const wrapper = render(<TaskList todos={tasks} />);
    const listItems = wrapper.find('li');
    expect(listItems).toHaveLength(3);
  });
});
