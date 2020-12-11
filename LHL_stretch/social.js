const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// function which returns the name of the individual who follows the most people
const biggestFollower = (persons) => {
  // keep track of length of followers
  // get the name of the person with most followers
  // loop through the object
  let numOfFollowers = 0;
  let name = "";
  Object.values(persons).forEach(person => {
    if (person.follows.length > numOfFollowers) {
      name = person.name;
      numOfFollowers = person.follows.length;
    }
  })
  return name;
}

// test functions
console.log(biggestFollower(data));