const asyncPromise = require('./solution');

describe('Tests for checking the value prints to console on resolving the promise', () => {
  test('Verify  PROMISE VALUE will get printed to the console when the promise is resolved ', () => {
    expect.assertions(1);
    return expect(asyncPromise).resolves.toBe('PROMISE VALUE');
  });
});
