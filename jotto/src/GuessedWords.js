import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let content;
  if (!props.guessedWords.length) {
    content = (
      <span data-test='guess-instructions'>Guess the secret word!</span>
    );
  }
  return <div data-test='component-guessed-words'>{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
