import React from 'react';
import {render, shallow} from 'enzyme';

import NewTodoForm from './NewTodoForm';

describe('todo form component', () => {
  it('should render without errors', () => {
    expect(render(<NewTodoForm createAction={() => {}} />)).toBeTruthy();
  });

  it('should have new-todo-form class', () => {
    const wrapper = shallow(<NewTodoForm createAction={() => {}} />);
    const div = wrapper.find('div');
    expect(div.hasClass('new-todo-form')).toBe(true);
  });

  it('should have an input element', () => {
    const wrapper = shallow(<NewTodoForm createAction={() => {}} />);
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
  });

  it('should call create action on submit', () => {
    const createAction = jest.fn();
    const wrapper = shallow(<NewTodoForm createAction={createAction} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(createAction).toHaveBeenCalled();
  });
});
