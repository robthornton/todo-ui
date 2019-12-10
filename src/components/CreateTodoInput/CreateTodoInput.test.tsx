import React from 'react';
import {render, shallow} from 'enzyme';

import {CreateTodoInput} from './CreateTodoInput';

describe('todo form component', () => {
  it('should render without errors', () => {
    expect(render(<CreateTodoInput onCreate={() => {}} />)).toBeTruthy();
  });

  it('should have an input element', () => {
    const wrapper = shallow(<CreateTodoInput onCreate={() => {}} />);
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
  });

  it('should call create action on submit', () => {
    const onCreate = jest.fn();
    const wrapper = shallow(<CreateTodoInput onCreate={onCreate} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(onCreate).toHaveBeenCalled();
  });
});
