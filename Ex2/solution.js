const promise = require('es6-promise');

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('FULLFILLED!'), 300);
});

module.exports = newPromise;
