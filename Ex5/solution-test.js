const asyncFn = require('./solution');

describe('Tests for checking the asynchronous nature of promise', () => {
  test('Verify  PROMISE VALUE will get printed to the console when the promise is resolved ', () => {
    const callback = (data) => {
      expect(data).toBe('MAIN PROGRAM PROMISE VALUE');
    };
    asyncFn(callback);
  });
});
