import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Good basic test
test('renders without an error', () => {
  const wrapper = shallow(<App />);
  // find using attribute selector
  // naming convention is component-name-of-component
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toEqual(1);
});

// Core to the app
test('renders increment button', () => {});

test('renders counter display', () => {});

// Test state
test('counter starts at 0', () => {});

// Test functionality
test('clicking button increments counter display', () => {});
