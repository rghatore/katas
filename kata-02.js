//This function recieves an array and an odd or even condition based on which the array elements are summed
const conditionalSum = function (values, condition) {
//Declaring variables to be used
  let even = [];
  let odd = [];
//Sum gets a default value of 0 in case the numbers don't match the condition
  let sum = 0;
//Looping through the array to check for even or odd numbers
  for (let i = 0; i < values.length; i++) {
//All even numbers get stored in an 'even' array
    if (values[i] % 2 === 0){
      even.push(values[i]);
//All odd numbers get stored in an 'odd' array
//Used else if instead of else becauese the numbers could be neither. In that case, result sum should be 0
    } else if (values[i] % 2 === 1) {
      odd.push(values[i]);
    }
  }
//Looping through the even array if the condition is even and adding the elements to sum
  if (condition === 'even') {
    for (let i = 0; i < even.length; i++) {
      sum += even[i];
    }
//Looping through the odd array if the condition is odd and adding the elements to sum
  } else if (condition === 'odd') {
    for (let i = 0; i < odd.length; i++) {
      sum += odd[i];
    }
  }
//Return the sum based on condition
  return sum;
};
/* TESTING
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
*/