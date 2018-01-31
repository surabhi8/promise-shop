  
const promiseOne = new Promise((resolve, reject) => {
  reject(new Error('It gives an error'));
});

promiseOne.catch((err) => {
  console.error(err.message);
});

const promiseTwo = Promise.resolve('SECRET VALUE');

const promiseThree = Promise.reject(new Error('It gives an error'));

promiseTwo.then(console.log);

promiseThree.then(null, console.log);

module.exports = { promiseOne, promiseTwo, promiseThree };
