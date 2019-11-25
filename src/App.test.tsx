import React from 'react';
import App from './App';
import {render} from 'enzyme';
import {MockAPI} from './api';

it('renders without crashing', () => {
  expect(render(<App api={new MockAPI()} />)).toBeTruthy();
});
