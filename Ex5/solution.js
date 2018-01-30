const promise = require('es6-promise');

const asyncPromise = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE');
});

asyncPromise.then(console.log);
console.log('MAIN PROGRAM');

module.exports = asyncPromise;
