const promise = require('es6-promise');

const newPromiseToReject = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('REJECTED!')), 300);
});
const onReject = (error) => {
  console.log(error.message);
};
newPromiseToReject.then(null, onReject);

module.exports = { onReject, newPromiseToReject };
