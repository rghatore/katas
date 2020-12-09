//This function recieves a string and return the number of vowels.
//Note that 'y' is not considered a vowel here. Also, we are ignoring Capital letters but it is an easy addition.
const numberOfVowels = function (data) {
//Declaring variables to be used
  let num = 0;
//Looping through the string characters
  for (let i = 0; i < data.length; i++) {
//Comparing the string character to check if it is a vowel and adding to the number if it is.
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      num += 1;
    }
  }
//Return number
  return num;
}
/*TESTING
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
*/