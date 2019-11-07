import React from 'react';
import {render, shallow} from 'enzyme';
import Title from './Title';

describe('title component', () => {
  it('should render without error', () => {
    const wrapper = render(<Title text="" />);
    expect(wrapper).toBeTruthy();
  });

  it('should render without error', () => {
    const wrapper = shallow(<Title text="Title" />);
    const h1 = wrapper.find('h1');
    expect(h1.text()).toBe('Title');
  });
});
