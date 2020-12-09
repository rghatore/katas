//This function recieves an array of instructor objects and returns the object with longest instructor name
const instructorWithLongestName = function (instructors) {
//Declaring variables to be used and storing the first one as longest
  let longestNameLength = instructors[0].name.length;
  let index = 0;
//Looping through the array starting at the second
  for (let i = 1; i < instructors.length; i++) {
//Comparing the instructor name lengths against the longest
    if (instructors[i].name.length > longestNameLength) {
      longestNameLength = instructors[i].name.length;
      index = i; //recording index number
    }
  }
  return instructors[index]; //returns the object at stored index with longest instructor name
};
/*TESTING
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
*/