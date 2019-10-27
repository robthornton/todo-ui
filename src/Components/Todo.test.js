import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import Todo from './Todo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders task text', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<Todo task={'Example task'} />, div);
  });
  const input = div.querySelector('input');
  expect(input.value).toBe('Example task');
  expect(input.classList.contains('completed')).toBe(false);
});

it('renders task completed', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<Todo completed />, div);
  });
  const input = div.querySelector('input');
  expect(input.classList.contains('completed')).toBe(true);
});
