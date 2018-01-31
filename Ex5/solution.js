const asyncFn = (callback) => {
  const asyncPromise = new Promise((resolve, reject) => {
    resolve('PROMISE VALUE');
  });
  let result = '';
  asyncPromise.then((data) => {
    result += data;
    callback(result);
  });
  result += 'MAIN PROGRAM ';
};
module.exports = asyncFn;
