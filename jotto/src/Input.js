import React from 'react';
import { PropTypes, string } from 'prop-types';

const Input = ({ secretWord }) => {
  return <div data-test='component-input'></div>;
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
