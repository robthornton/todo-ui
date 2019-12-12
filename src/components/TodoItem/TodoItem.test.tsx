import React from 'react';
import {TodoItem} from './TodoItem';
import {render, shallow} from 'enzyme';

describe('Todo component', () => {
  const todo = {id: 0, task: 'Example', completed: true};

  it('renders without crashing', () => {
    expect(
      render(<TodoItem todo={todo} onComplete={() => {}} onDelete={() => {}} />)
    );
  });

  it('renders with correct text', () => {
    const wrapper = shallow(
      <TodoItem todo={todo} onComplete={() => {}} onDelete={() => {}} />
    );
    const input = wrapper.find('div');
    expect(input.text()).toBe('Example');
  });
});
