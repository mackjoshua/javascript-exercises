const add = function(...nums) {
  let sum = 0;
	for (const num of nums) {
    sum += num;
  }
  return sum;
  }
  


const subtract = function(...nums) {
	let total = nums[0];
  return total - nums[1];
  
};

const sum = function(nums) {
	let sum = 0;
  for (let number of nums) {
    sum += number;
  }
	return sum;
};

const multiply = function(nums) {
  let sum = 1;
  for (let number of nums) {
    sum *= number;
  }
	return sum;
};

const power = function (...nums) {
	return nums[0] ** nums[1];
};

const factorial = function(n) {
  if (n == 0) { return 1 };
  return n * factorial(n - 1);
  
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
