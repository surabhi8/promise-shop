const { parsePromised } = require('./solution');

describe('Tests for checking error handling in promise', () => {
  test('Error thrown is handled by rejection handler of promise  when invalid json object is given', (done) => {
    const json = 'abc';
    expect(parsePromised(json).then(null, console.log)).rejects.toBe('Unexpected token a in JSON at position 0');
    done();
  });
  test('When correct json is passed promise is resolved and json is parsed', (done) => {
    const json = '{"result":true, "count":42}';
    expect(parsePromised(json).then(console.log, console.log)).resolves.toBe('{ result: true, count: 42 }');
    done();
  });
  test('When correct json is passed promise is resolved and json is parsed', (done) => {
    const json = '{"result":true, "count":42}';
    expect(typeof(parsePromised(json)))toBe('promise');
    done();
  });
});
