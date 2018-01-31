
const parsePromised = json => new Promise((resolve, reject) => {
  try {
    resolve(JSON.parse(json));
  } catch (e) {
    reject(e.message);
  }
});

// const json = '{"result":true, "count":42}';
// parsePromised(json).then(console.log, console.log);

module.exports = { parsePromised };
