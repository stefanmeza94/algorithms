function charCount(str) {
  // make object to return on end
  let result = {};
  // loop over string, for each char
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    // test if char is letter or number, everything else do nothing
    if (/[a-z0-9]/.test(char)) {
      // if the char is a key in object, add one to count
      if (result[char] > 0) {
        result[char]++;

        // if the char is NOT in object, add it to object and set value to 1
      } else {
        result[char] = 1;
      }
    }
  }
  // return object at end
  return result;
}

function charCountImproved(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumberic(char)) {
      char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumberic(char) {
  const code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A - Z)
    !(code > 96 && code < 123) // lower alpha (a -z)
  ) {
    return false;
  } else {
    return true;
  }
}

console.log('"hello function number 2"');
console.log(charCountImproved("hello function number 2"));

// next => section 5: problem sovling patterns
