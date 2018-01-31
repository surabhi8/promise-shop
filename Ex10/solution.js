const alwaysThrows = () => {
  throw new Error('OH NOES');
};

const iterate = (argument) => {
  console.log(argument);
  return argument + 1;
};
const onReject = (error) => {
  console.log(error.message);
};

Promise.resolve(iterate(1))
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
module.exports = { alwaysThrows, iterate, onReject };
