const first = () => new Promise((resolve, reject) => {
  resolve('secret value first');
});
const second = val => new Promise((resolve, reject) => {
  resolve(val);
});
const firstPromise = first();

const secondPromise = firstPromise.then(val => second(val));

secondPromise.then(console.log);

module.exports = { firstPromise, secondPromise };
