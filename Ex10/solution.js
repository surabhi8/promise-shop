const alwaysThrows = () => {
  throw new Error('OH NOES');
};

const iterate = (argument) => {
  global.console.log(argument);
  return argument + 1;
};
const onReject = error => error.message;

const newPromise = () => {
  const promise = Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject);
  return promise;
};
module.exports = {
  alwaysThrows, iterate, onReject, newPromise,
};
