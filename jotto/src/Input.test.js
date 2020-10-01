import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

import Input from './Input';

const defaultProps = {
  secretWord: 'party'
};

/**
 * Setup function for Input component
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test('renders Input component without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, defaultProps);
});
