const promise = require('es6-promise');

const newPromise = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

const onRejected = (error) => {
  global.console.log(error.message);
};

newPromise.then(global.console.log, onRejected);

module.exports = { onRejected, newPromise };
