const printUsingSetTimeout = require('./solution.js');
const callBackfN = require('./solution.js');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};
describe('Tests for checking the value printed on console', () => {
  test('verify that nothing is printed to the console ', () => {
    const callback = () => {
      expect(global.console.log).toHaveBeenCalledWith(undefined);
    };
    printUsingSetTimeout(callback);
  });
  test('setTimeout is called once with delay of 300ms ', () => {
    const callback = () => {
      expect(global.console.log).toHaveBeenCalledWith('TIMED OUT');
    };
    printUsingSetTimeout(callback, 'TIMED OUT');
  });
});
describe('Tests for checking the value printed on console by synchronous function', () => {
  test('verify that nothing is printed to the console ', () => {
    const fn = () => {};

    expect(global.console.log).toHaveBeenCalledWith(undefined);
    callBackfN(fn);
  });
});
