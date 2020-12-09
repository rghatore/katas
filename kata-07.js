/*This function recieves an array of string and number as parameters. It 
checks how many times the word 'dirty shows up as a precentage (as a decimal) and then compare 
with the threshold. Returns "Polluted" or "Clean" based on the comparison */
const checkAir = function (samples, threshold) {
//Declare variable to be used
  let dirty = 0; 
  let percentage = null;
//Counts the number of times 'dirty' shows up  
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirty++;
    }
  }
//Calculates the percentage
  percentage = dirty / samples.length; //more like a proportion - do not multiply by 100
//Compares against the threshold
  if (percentage <= threshold) {
    return 'Clean';
  } else {
    return 'Polluted';
  }
}
/*TESTING
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));
*/