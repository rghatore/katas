//This function recieves array of arrays and a string of car. 
//It then returns the 'available spot = upper-case letter' as a co-ordinate which matches the car
const whereCanIPark = function (spots, vehicle) {
//Employing the switch condition based on what kind of vehicle it is
  switch (vehicle) {
//Nested loops to check for the element which meets the parking criteria and returning the co-ordinates x 3
    case 'regular':
      for (let i = 0; i < spots.length; i++) {
        for (let j = 0; j < spots[i].length; j++) {
          if (spots[i][j] === 'R') {
            return [j, i];
          }
        }
      }
    break;
    case 'small':
      for (let i = 0; i < spots.length; i++) {
        for (let j = 0; j < spots[i].length; j++) {
          if (spots[i][j] === 'S' || spots[i][j] === 'R') {
            return [j, i];
          }
        }
      }
    break;
    case 'motorcycle':
      for (let i = 0; i < spots.length; i++) {
        for (let j = 0; j < spots[i].length; j++) {
          if (spots[i][j] === 'M' || spots[i][j] === 'S' || spots[i][j] === 'R') {
            return [j, i];
          }
        }
      }
    break;
//Default not required but adding to form good habits
    default:
      break;
  }
//Return false if the parking criteria doesn't match the IF condition
  return false;
}
/*TESTING
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));
console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));
*/