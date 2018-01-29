const onReject = require('./solution.js');
const newPromiseToReject = require('./solution.js');

global.console = {
  log: jest.fn(),
};
describe('Tests for helper function onReject', () => {
  test('helper function prints REJECTED on console', () => {
    const object = {
      message: 'REJECTED',
    };
    onReject(object);
    expect(global.console.log).toBe('REJECTED');
  });
});
describe('Tests for promise reject', () => {
  test('Rejection handler in promise prints REJECTED! error message', () => {
    expect.assertions(1);
    return expect(newPromiseToReject).rejects.toEqual(new Error('REJECTED!'));
  });
});
