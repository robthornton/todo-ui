import React from 'react';
import Todo from './Todo';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

let container: HTMLElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

describe('Todo component', () => {
  it('renders without crashing', () => {
    act(() => {
      render(<Todo />, container);
    });
    expect(container.textContent).toBe('');
  });

  it('renders with input text', () => {
    act(() => {
      render(<Todo task="Example" />, container);
    });
    const input = container.getElementsByTagName('input')[0];
    expect(input.value).toBe('Example');
  });

  it('renders with input completed class', () => {
    act(() => {
      render(<Todo completed />, container);
    });
    const input = container.getElementsByTagName('input')[0];
    expect(input.classList.contains('completed')).toBe(true);
  });
});
