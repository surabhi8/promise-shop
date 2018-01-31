const newPromise = require('./solution.js');

describe('Tests for promises', () => {
  test('resolve function in executer of promise is called with FULLFILLED', () => {
    expect.assertions(1);
    return expect(newPromise).resolves.toBe('FULLFILLED!');
  });
});
