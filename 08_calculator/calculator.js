const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function (nums) {
  return parseInt(nums.reduce((sum, num) => sum + num, 0))
};

const multiply = function(nums) {
  return parseInt(nums.reduce((mult, num) => mult * num, 1))
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
  let result = 1;
  for (i = 1; i < num + 1; i++){
    result *= i
  };
  return result
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
