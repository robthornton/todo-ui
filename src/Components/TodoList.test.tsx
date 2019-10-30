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

test('renders without crashing', () => {
  act(() => {
    create(<TaskList todos={[{id: 0, task: 'Example', completed: true}]} />);
  });
});

test('renders list with one Task', () => {
  let component: ;

  act(() => {
    component = create(
      <TaskList todos={[{id: 0, task: 'Example', completed: true}]} />
    );
  });

  // expect(component.find('li')).to.have.length(1);
});
