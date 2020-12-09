//This function recieves a string and coverts the whitespace characters to %20
//Note that whitespace at the front and end of the string is ignored
const urlEncode = (text) => {
//Declaring variables to be used
  let startIndex = 0
  let endIndex = text.length - 1;
  let encodedText = '';
//Checking to see if the string starts with whitespace and moving the index forward if it does
  while (text[startIndex] === ' ') {
    startIndex++;
  }
//Checking to see if the string ends with whitespace and moving the index backword if it does
  while (text[endIndex] === ' ') {
    endIndex--;
  }
//Looping through the string and adding to encodedText changing whitespace to %20
  for (let i = startIndex; i <= endIndex; i++) {
    if (text[i] === ' ') {
      encodedText += '%20';
    } else {
      encodedText += text[i];
    }
  }
  return encodedText;
};
/*TESTING
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
*/