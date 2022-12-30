const sumAll = function(num1, num2) {
    let finalSum = 0;
    let minNum;
    let maxNum;
//   Error handling for negative numbers
    if ((num1 || num2) <= -1) {
      return 'ERROR';
    }
//   Error handling for when a non-number parameter is provided
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'ERROR';
    }
// This if statement assigns which number is the min or max, 
// So that parameters can be provided in any order
    if (num1 < num2) {
      minNum = num1;
      maxNum = num2;
    } else {
      minNum = num2;
      maxNum = num1;
    }
  
    for (i = minNum; i <= maxNum; i++) {
      finalSum += i;
    }
    console.log(finalSum);
    return finalSum;
  }
// Do not edit below this line
module.exports = sumAll;
