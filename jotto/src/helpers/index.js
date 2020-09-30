/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretWordSet = new Set([...secretWord]);
  const guessedWordSet = new Set([...guessedWord]);

  return [...secretWordSet].filter((letter) => guessedWordSet.has(letter))
    .length;
};
