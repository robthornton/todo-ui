import React from 'react';
import {render, shallow} from 'enzyme';

import TodoForm from './TodoForm';

describe('todo form component', () => {
  it('should render without errors', () => {
    expect(render(<TodoForm createAction={() => {}} />)).toBeTruthy();
  });

  it('should have new-todo-form class', () => {
    const wrapper = shallow(<TodoForm createAction={() => {}} />);
    const div = wrapper.find('div');
    expect(div.hasClass('new-todo-form')).toBe(true);
  });

  it('should have an input element', () => {
    const wrapper = shallow(<TodoForm createAction={() => {}} />);
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
  });

  it('should call create action on submit', () => {
    const createAction = jest.fn();
    const wrapper = shallow(<TodoForm createAction={createAction} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(createAction).toHaveBeenCalled();
  });
});
