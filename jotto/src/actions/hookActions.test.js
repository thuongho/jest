import moxios from 'moxios';

import { getSecretWord } from './hookActions';

describe('moxios tests', () => {
  beforeEach(() => {
    // requests are routed to moxios instead of http
    moxios.install();
  });

  afterEach(() => {
    // requests are restored to http
    moxios.uninstall();
  });

  test('calls the getSecretWord callback on axios response', async () => {
    const secretWord = 'party';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    // create mock for callback arg
    // mock setSecretWord
    const mockSetSecretWord = jest.fn();

    // mock getSecretWord fetching server to get and set secretWord
    await getSecretWord(mockSetSecretWord);

    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
