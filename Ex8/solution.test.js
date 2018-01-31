const { attachTitle } = require('./solution');

describe('Tests for checking the promises and values ', () => {
  test('DR. MANHATTAN will get printed when attachTitle is called', () => expect(attachTitle).toBe('DR. MANHATTAN'));
  // test('first promise is resolved', () => {
  //   expect.assertions(1);
  //   return expect(firstPromise).resolves.toBe();
  // });
});
