const attachTitle = firstArgument => `DR. ${firstArgument}`;
const promise = Promise.resolve('MANHATTAN');
promise.then(attachTitle).then(console.log);

module.exports = { attachTitle };
