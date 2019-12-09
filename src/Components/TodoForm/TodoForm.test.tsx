import React from 'react';
import {render, shallow} from 'enzyme';

import TodoForm from './TodoForm';

describe('todo form component', () => {
  it('should render without errors', () => {
    expect(render(<TodoForm onCreate={() => {}} />)).toBeTruthy();
  });

  it('should have an input element', () => {
    const wrapper = shallow(<TodoForm onCreate={() => {}} />);
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
  });

  it('should call create action on submit', () => {
    const onCreate = jest.fn();
    const wrapper = shallow(<TodoForm onCreate={onCreate} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(onCreate).toHaveBeenCalled();
  });
});
