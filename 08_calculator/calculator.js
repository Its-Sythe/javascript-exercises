const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
  }
  return sum;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(...numbers) {
	let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
  }
  return sum;
};

const multiply = function(...numbers) {
  let product = 1;
  for (let i = 0; i <= numbers.length - 1; i++) {
    product *= numbers[i];
  }
  return product;
};

const power = function(num, exponent) {
	return num ** exponent;
};

const factorial = function(num) {
	let total = 1;
  for (num; num > 0; num--) {
    total *= num;
  }
  return total;
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
