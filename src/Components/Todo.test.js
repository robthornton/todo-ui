import React from 'react';
import Todo from './Todo';
import {create} from 'react-test-renderer';

describe('Todo component', () => {
  it('renders without crashing', () => {
    const todo = create(<Todo />);
    expect(todo.toJSON()).toMatchSnapshot();
  });

  // it('renders task text', () => {
  //   const div = document.createElement('div');
  //   act(() => {
  //     ReactDOM.render(<Todo task={'Example task'} />, div);
  //   });
  //   const input = div.querySelector('input');
  //   expect(input.value).toBe('Example task');
  //   expect(input.classList.contains('completed')).toBe(false);
  // });

  // it('renders task completed', () => {
  //   const div = document.createElement('div');
  //   act(() => {
  //     ReactDOM.render(<Todo completed />, div);
  //   });
  //   const input = div.querySelector('input');
  //   expect(input.classList.contains('completed')).toBe(true);
  // });
});
