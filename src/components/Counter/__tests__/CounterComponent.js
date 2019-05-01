import React from 'react';
import { mount, shallow } from 'enzyme';
import CounterComponent from '../components/CounterComponent';

import { expect } from 'chai';

it('renders without crashing', () => {
  const wrapper = shallow(<CounterComponent counter={0} />);
  expect(wrapper.find('h1')).to.have.lengthOf(1);
  expect(wrapper.find('h1').text()).equals('Counter: 0');
});

it('should render buttons', () => {
  const wrapper = shallow(<CounterComponent />);
  expect(wrapper.find('button')).to.have.lengthOf(2);
  expect(wrapper.find('.increment-counter')).to.have.lengthOf(1);
  expect(wrapper.find('.decrement-counter')).to.have.lengthOf(1);
});

it('test increment and decrement', () => {
  let initialState = 0;
  
  const increment = () => {
    initialState++;
  }

  const decrement = () => {
    initialState--;
  }

  const wrapper = shallow(<CounterComponent counter={initialState} decrement={decrement} increment={increment} />);

  const incrementButton = wrapper.find('.increment-counter');
  const decrementButton = wrapper.find('.decrement-counter');

  incrementButton.simulate('click');
  expect(initialState).equals(1);
  decrementButton.simulate('click');
  expect(initialState).equals(0);
  
});