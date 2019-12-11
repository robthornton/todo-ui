import React from 'react';
import {Button} from './Button';
import {render} from 'enzyme';

describe('Button component', () => {
  it('renders without error', () => {
    const wrapper = render(<Button />);
    expect(wrapper.length).toBe(1);
  });
});
