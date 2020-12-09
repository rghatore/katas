const titleCase = sentence => {
  let words = "";
  let wordArray = [];
  // trim the ends to remove any extra spaces
  // split by space
  // change the first letter to upper case
  for (const word of sentence.toLowerCase().trim().split(" ")) {
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        words += word[i].toUpperCase();
      } else {
        words += word[i];
      }
    }
    wordArray.push(words);
    words = "";
  }
  return wordArray.join(" ");
};

console.log(titleCase("i r cool"));