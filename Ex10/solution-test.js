const { alwaysThrows, iterate, newPromise } = require('./solution');

describe('Tests for checking error handling in promises usiong catch', () => {
  test('Alwaysthrows function throws an error', () => {
    expect(() => { alwaysThrows(); }).toThrow();
  });
  test('Alwaysthrows function throws an error OH NOES', () => {
    expect(() => { alwaysThrows(); }).toThrowError('OH NOES');
  });
  test('Iterate function tested for valid inputs', () => {
    expect(iterate(1)).toBe(2);
  });
  test('NewPromise returns a promise', (done) => {
    expect(newPromise()).toBeInstanceOf(Promise);
    done();
  });
  test('NewPromise returned promise which is resolved', (done) => {
    expect(newPromise()).rejects.toThrow('OH NOES');
    done();
  });
});
