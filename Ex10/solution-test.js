const { alwaysThrows, iterate } = require('./solution');

describe('Tests for checking error handling in promises usiong catch', () => {
  test('Alwaysthrows function throws an error', () => {
    expect(alwaysThrows()).toBe('OH NOES');
  });
  test('Iterate function tested for valid inputs', () => {
    expect(iterate(1)).toBe(2);
  });
});
