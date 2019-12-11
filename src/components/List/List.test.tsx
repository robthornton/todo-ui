import React from 'react';
import {render} from 'enzyme';
import {List} from './List';

describe('List component', () => {
  it('renders without error', () => {
    const wrapper = render(
      <List
        count={0}
        itemRenderer={(item: any): React.ReactElement => <div />}
      />
    );
    expect(wrapper.length).toBe(1);
  });

  it('calls itemRenderer the same number of times as count', () => {
    const count = 3;
    const fn = jest.fn();
    render(<List count={count} itemRenderer={fn} />);
    expect(fn).toHaveBeenCalledTimes(count);
  });
});
