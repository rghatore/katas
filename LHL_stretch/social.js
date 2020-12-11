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

// helper function which adds followedBy data
const followedBy = (persons) => {

  Object.entries(persons).forEach(([key, value]) => {
    value.follows.forEach(following => {
      if (persons[following]["followedBy"]) {
        persons[following].followedBy.push(key);
      } else {
        persons[following]["followedBy"] = [key];
      }
    })
  });

  return persons;
}

// function which returns the name of the most popular (most followed) individual
const mostPopular = (persons) => {
  // loop through object
  // compare num of people followed By
  const data = followedBy(persons);
  let numFollowedBy = 0;
  let name = "";

  Object.values(data).forEach(person => {
    if (person.followedBy.length > numFollowedBy) {
      name = person.name;
      numFollowedBy = person.followedBy.length;
    }
  })

  return name;
}

// function which outputs a list of everyone and for each of them, the names of who they follow and who follows them
const printAll = (persons) => {

  const data = followedBy(persons);
  const print = {};

  Object.entries(data).forEach(([key, value]) => {
    print[key] = {"name": value.name};
    const following = [];
    const followedBy = [];
    // add names for following
    value.follows.forEach(person => {
      following.push(data[person].name)
    });
    // add names for followed by 
    value.followedBy.forEach(person => {
      followedBy.push(data[person].name)
    });

    print[key]["follows"] = following;
    print[key]["followedBy"] = followedBy;

  })

  return print;
}


// test functions
// console.log(biggestFollower(data));
// console.log(mostPopular(data));
console.log(printAll(data));

