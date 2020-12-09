//This function recieves an array with at least two numbers and sums the two largest numbers.
const sumLargestNumbers = function (data) {
//No need to go through the whole code if there are only two elements
  if (data.length === 2) {
    return data[0] + data[1];
  }
//Declaring the required variables
  let largestNum;
  let secondLargestNum;
//Arranging them in order
  if (data[0] >= data[1]) {
    largestNum = data[0];
    secondLargestNum = data[1];
  } else {
    largestNum = data[1];
    secondLargestNum = data[0];
  }
//Comparing with other elements
  for (let i = 2; i < data.length; i++) {
    if (data[i] >= largestNum) {
      secondLargestNum = largestNum;
      largestNum = data[i];
    } else if (data[i] > secondLargestNum) {
      secondLargestNum = data[i];
    }
  }
//Return the sum of two largest numbers
  return largestNum + secondLargestNum;
};

/* FOR TESTING
console.log(sumLargestNumbers([1, 10]));  //prints 11
console.log(sumLargestNumbers([1, 2, 3]));  //prints 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));  //prints 126
*/