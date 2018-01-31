const { promiseOne, promiseTwo, promiseThree } = require('./solution');

describe('Tests for checking the value prints to console on resolving the promise', () => {
  test('Verify  it gives an error will get printed to the console when the promise is rejected using catch ', () => {
    expect.assertions(1);
    return expect(promiseOne).rejects.toThrowError(new Error('It gives an error'));
  });
  test('Verify  SECRET VALUE will get printed to the console when the promise is resolved ', () => {
    expect.assertions(1);
    return expect(promiseTwo).resolves.toBe('SECRET VALUE');
  });
  test('Verify  it gives an error will get printed to the console when the promise is rejected using catch ', () => {
    expect.assertions(1);
    return expect(promiseThree).rejects.toThrowError(new Error('It gives an error'));
  });
});
