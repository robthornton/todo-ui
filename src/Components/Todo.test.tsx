import React from 'react';
import Todo from './Todo';
import {mount, render, shallow} from 'enzyme';

describe('Todo component', () => {
  const todo = {id: 0, task: 'Example', completed: true};

  it('renders without crashing', () => {
    expect(
      render(
        <Todo todo={todo} completeAction={() => {}} deleteAction={() => {}} />
      )
    );
  });

  it('renders with input text', () => {
    const wrapper = shallow(
      <Todo todo={todo} completeAction={() => {}} deleteAction={() => {}} />
    );
    const input = wrapper.find('input');
    expect(input.prop('value')).toBe('Example');
  });

  it('renders with input completed class', () => {
    const wrapper = shallow(
      <Todo todo={todo} completeAction={() => {}} deleteAction={() => {}} />
    );
    const input = wrapper.find('span');
    expect(input.hasClass('completed')).toBe(true);
  });

  it('should render without error delete button is clicked', () => {
    const wrapper = mount(
      <Todo todo={todo} completeAction={() => {}} deleteAction={() => {}} />
    );
    const completeButton = wrapper.find('button.delete');
    expect(completeButton.simulate('click')).toBeTruthy();
  });

  it('should use callback when delete button is clicked', () => {
    const deleteFunction = jest.fn();
    const wrapper = mount(
      <Todo
        todo={todo}
        completeAction={() => {}}
        deleteAction={deleteFunction}
      />
    );
    const completeButton = wrapper.find('button.delete');
    completeButton.simulate('click');
    expect(deleteFunction).toHaveBeenCalled();
  });

  it('should use callback when complete button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Todo todo={todo} completeAction={callback} deleteAction={() => {}} />
    );
    const completeButton = wrapper.find('button.complete');
    completeButton.simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});
