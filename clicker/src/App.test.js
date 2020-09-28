import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// Good basic test
test('renders without an error', () => {
  const wrapper = setup();
  // find using attribute selector
  // naming convention is component-name-of-component
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toEqual(1);
});

// Core to the app
test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toEqual(1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toEqual(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toEqual(1);
});

// Test state
test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

// Test functionality
test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking decrement button decreases counter display', () => {
  const counter = 6;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
});

test('display an error message when count goes below 0', () => {
  const wrapper = setup();

  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.length).toEqual(1);
});

test('clicking increment button makes the error message go away', () => {
  const counter = 0;
  const wrapper = setup(counter);

  let button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter);
});
