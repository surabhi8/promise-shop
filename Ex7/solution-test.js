const { firstPromise, secondPromise } = require('./solution');

describe('Tests for checking the promise chaining', () => {
  test('later promise is resolved using the resolved value of first promise', () => {
    expect.assertions(1);
    expect(secondPromise).resolves.toBe('secret value first');
  });
  test('first promise is resolved', () => {
    expect.assertions(1);
    expect(firstPromise).resolves.toBe();
  });
});
