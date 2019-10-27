import React from 'react';
import TaskList from './TodoList';
import {act, create, ReactTestRenderer} from 'react-test-renderer';

test('renders without crashing', () => {
  act(() => {
    create(<TaskList todos={[{id: 0, task: 'Example', completed: true}]} />);
  });
});

test('renders list with one Task', () => {
  let component: ReactTestRenderer;

  act(() => {
    component = create(
      <TaskList todos={[{id: 0, task: 'Example', completed: true}]} />
    );
  });

  expect(component.find('li')).to.have.length(1);
});
