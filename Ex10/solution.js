const alwaysThrows = () => 'OH NOES';

const iterate = (argument) => {
  console.log(argument);
  return argument + 1;
};
module.exports = { alwaysThrows, iterate };
