import React from 'react';
import App from './App';
import {render} from 'enzyme';

it('renders without crashing', () => {
  expect(render(<App />)).toBeTruthy();
});
