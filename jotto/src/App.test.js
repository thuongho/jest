import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import hookActions from './actions/hookActions';
import App from './App';

const mockGetSecretWord = jest.fn();

/**
 * Setup function for app component.
 * @param {string} secretWord - desired secretWord state value for test.
 * @returns {ReactWrapper}
 */
const setup = (secretWord = 'party') => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  // use mount cuz useEffect not called on shallow (enzyme issue2086)
  return mount(<App />);
};

test('App renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup();

    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
});

describe('secretWord does not update on App update', () => {
  const wrapper = setup();
  // mockGetSecretWord gets called on mount
  mockGetSecretWord.mockClear();

  // wrapper.update() doesn't trigger update
  // issue2091
  // setProps trigger update
  wrapper.setProps();

  expect(mockGetSecretWord).not.toHaveBeenCalled();
});
