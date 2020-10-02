import React from 'react';
import { PropTypes } from 'prop-types';

const Input = ({ secretWord }) => {
  // Don't destructure and use React.useState for mocking
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input
          type='text'
          data-test='input-box'
          className='mb-2 mx-sm-3'
          placeholder='enter guess'
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          className='btn btn-primary mb-2'
          data-test='submit-button'
          onClick={(e) => {
            e.preventDefault();
            // TODO: update guessedWords
            // TODO: check against secretWord and update success if needed
            setCurrentGuess('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
