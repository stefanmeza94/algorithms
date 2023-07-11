function charCount(str) {
  // make object to return on end
  let result = {};
  // loop over string, for each char
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    // if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;

      // if the char is a number/letter AND is NOT in object, add it to object and set value to 1
    } else {
      result[char] = 1;
    }

    // if the char is something else (space, period, etc...) don't do anything
  }
  // return object at end
  return result;
}

console.log(charCount("hello"));
