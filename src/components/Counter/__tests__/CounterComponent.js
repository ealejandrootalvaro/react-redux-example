import React from 'react';
import { shallow } from 'enzyme';
import CounterComponent from '../components/CounterComponent';

it('renders without crashing', () => {
  shallow(<CounterComponent />);
});