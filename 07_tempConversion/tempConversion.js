const ftoc = (temperature) => roundTo1(5/9 * (temperature - 32));

const ctof = (temperature) => roundTo1(9/5 * temperature + 32, -1);

const roundTo1 = (number) => Math.round(number * 10) / 10;
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
