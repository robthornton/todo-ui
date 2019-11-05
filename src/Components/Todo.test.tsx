import React from 'react';
import Todo from './Todo';
import {mount, render, shallow} from 'enzyme';

describe('Todo component', () => {
  it('renders without crashing', () => {
    expect(render(<Todo />));
  });

  it('renders with input text', () => {
    const wrapper = shallow(<Todo task="Example" />);
    const input = wrapper.find('input');
    expect(input.prop('value')).toBe('Example');
  });

  it('renders with input completed class', () => {
    const wrapper = shallow(<Todo completed />);
    const input = wrapper.find('input');
    expect(input.hasClass('completed')).toBe(true);
  });

  it('should set completed class when completed button is clicked', () => {
    const wrapper = mount(<Todo />);
    const completeButton = wrapper.find('button.complete');
    completeButton.simulate('click');
    const input = wrapper.find('input');
    expect(input.hasClass('completed')).toBe(true);
  });
});
