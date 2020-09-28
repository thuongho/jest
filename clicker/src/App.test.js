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
  expect(appComponent.length).toBe(1);
});

// Core to the app
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

// Test state
test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

// Test functionality
describe('Increment', () => {
  test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  test('clicking button increments counter display', () => {
    const wrapper = setup();

    // find button and click
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');

    // find display and test value
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });
});

describe('Decrement button', () => {
  test('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toEqual(1);
  });

  test('clicking decrement button decreases counter display', () => {
    const wrapper = setup();

    // click button to make counter greater than 0
    let button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    // find decrement button and click
    button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');

    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
});

describe('error when counter goes below 0', () => {
  test('error does not show when not needed', () => {
    // use 'hidden-class' for error div
    // data-test value 'error-message'
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, 'error-message');

    // using enzyme's .hasClass() method
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    console.log(wrapper.debug());

    expect(errorHasHiddenClass).toBe(true);
  });
});

describe('counter is 0 and decrement is clicked', () => {
  // use describe to use beforeEach for shared setup

  // scoping wrapper to the describe, so it can be used in beforeEach and the tests
  let wrapper;
  beforeEach(() => {
    wrapper = setup();

    // find button and click
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
  });

  test('error shows', () => {
    // check the class of the error message
    const errorDiv = findByTestAttr(wrapper, 'error-message');
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(false);
  });

  test('counter still displays 0', () => {
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });

  test('clicking increment clears the error', () => {
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');

    // check the class of the error message
    const errorDiv = findByTestAttr(wrapper, 'error-message');
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  });
});
