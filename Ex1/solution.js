const callBackfn = (callBack, statement) => { global.console.log(statement); callBack(); };
const printUsingSetTimeout = (callBack, statement) => {
  setTimeout(callBackfn(callBack, statement), 300);
};

// printUsingSetTimeout('TIMED OUT!');

module.exports = printUsingSetTimeout;
