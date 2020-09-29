import React, { useState } from 'react';
import './App.css';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

function App() {
  const [success, setSuccess] = useState(true);
  const [guessedWords, setGuessedWords] = useState([
    { guessedWord: 'train', letterMatchCount: 1 }
  ]);

  return (
    <div className='container'>
      <h1>Jotto Game</h1>
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
