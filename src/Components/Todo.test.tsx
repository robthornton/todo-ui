import React from 'react';
import TodoItem from './Todo';
import {mount, render, shallow} from 'enzyme';

describe('Todo component', () => {
  const todo = {id: 0, task: 'Example', completed: true};

  it('renders without crashing', () => {
    expect(
      render(
        <TodoItem
          todo={todo}
          completeAction={() => {}}
          deleteAction={() => {}}
        />
      )
    );
  });

  it('renders with correcct text', () => {
    const wrapper = shallow(
      <TodoItem todo={todo} completeAction={() => {}} deleteAction={() => {}} />
    );
    const input = wrapper.find('div');
    expect(input.text()).toBe('Example');
  });

  it('renders with input completed class', () => {
    const wrapper = shallow(
      <TodoItem todo={todo} completeAction={() => {}} deleteAction={() => {}} />
    );
    const input = wrapper.find('div');
    expect(input.hasClass('completed')).toBe(true);
  });

  it('should render without error delete button is clicked', () => {
    const wrapper = mount(
      <TodoItem todo={todo} completeAction={() => {}} deleteAction={() => {}} />
    );
    const completeButton = wrapper.find('button.delete');
    expect(completeButton.simulate('click')).toBeTruthy();
  });

  it('should use callback when delete button is clicked', () => {
    const deleteFunction = jest.fn();
    const wrapper = mount(
      <TodoItem
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
      <TodoItem todo={todo} completeAction={callback} deleteAction={() => {}} />
    );
    const completeButton = wrapper.find('button.complete');
    completeButton.simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});
