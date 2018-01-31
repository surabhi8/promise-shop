const { alwaysThrows, iterate } = require('./solution');

describe('Tests for checking error handling in promises usiong catch', () => {
  test('Alwaysthrows function throws an error', () => {
    expect(() => { alwaysThrows(); }).toThrowError();
  });
  test('Alwaysthrows function throws an error OH NOES', () => {
    expect(() => { alwaysThrows(); }).toThrowError('OH NOES');
  });
  test('Iterate function tested for valid inputs', () => {
    expect(iterate(1)).toBe(2);
  });
});
