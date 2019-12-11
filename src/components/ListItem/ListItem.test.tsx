import React from 'react';
import {ListItem} from './ListItem';
import {render} from 'enzyme';

describe('ListItem component', () => {
  it('renders without error', () => {
    const wrapper = render(<ListItem />);
    expect(wrapper.length).toBe(1);
  });

  it('renders child props', () => {
    const wrapper = render(
      <ListItem>
        <div />
        <div />
      </ListItem>
    );
    expect(wrapper.find('div').length).toBe(2);
  });
});
