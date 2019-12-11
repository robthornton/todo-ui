import React from 'react';
import {Button} from './Button';
import {render, shallow} from 'enzyme';

describe('Button component', () => {
  it('renders without error', () => {
    const wrapper = render(<Button />);
    expect(wrapper.length).toBe(1);
  });

  it('renders text', () => {
    const wrapper = render(<Button label="Label" />);
    expect(wrapper.text()).toBe('Label');
  });

  it('calls onClick function on click', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Button label="Label" onClick={fn} />);
    wrapper.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
