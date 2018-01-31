const { newPromise, onRejected } = require('./solution');

global.console = {
  log: jest.fn(),
};

describe('Tests for checking the value prin', () => {
  test('Verify I FIRED is printed to the console when the promise is resolved ', () => {
    expect.assertions(1);
    return expect(newPromise).resolves.toBe('I FIRED');
  });
});

describe('Test for checking the string logged by the onReject helper function', () => {
  test('Verify REJECTED is printed to the console by the onReject helper function', () => {
    onRejected({ message: 'REJECTED' });
    expect(global.console.log).toHaveBeenCalledWith('REJECTED');
  });
});
