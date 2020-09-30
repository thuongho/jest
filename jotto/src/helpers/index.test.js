import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('returns correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('solo', secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test('returns the correct count where there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('fart', secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test('returns correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parry', secretWord);
    expect(letterMatchCount).toBe(4);
  });
});
