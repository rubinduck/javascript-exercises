const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (numbers) => numbers.reduce((a, b) => a + b, 0);

const multiply = (numbers) => numbers.reduce((a, b) => a * b, 1);

const power = (number, power) => {
  if (power === 0)
    return 1;
  if (power < 0){
    number = 1/number;
    power = -power;
  }
  let result = 1;
  for (let i = 1; i <= power; i++)
    result *= number;
  return result
};

const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++)
    result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
