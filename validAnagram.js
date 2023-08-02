// Frequency Counter Pattern
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return console.log(false);
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let letter of str1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return console.log(false);
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return console.log(false);
    }
  }

  return console.log(true);
}

validAnagram("", "");
validAnagram("aaz", "zza");
validAnagram("anagram", "nagaram");
validAnagram("rat", "car");
validAnagram("awesome", "awesom");
validAnagram("qwerty", "qeywrt");
validAnagram("texttwisttime", "timetwisttext");

// Frequency Counter Pattern
function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return console.log(false);
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  // {a: 3, n: 1, g: 1, r: 1, m: 1}
  for (let i = 0; i < second.length; i++) {
    const letter = second[i];
    if (!lookup[letter]) {
      return console.log(false);
    } else {
      lookup[letter] -= 1;
    }
  }
  return console.log(true);
}

validAnagram2("", "");
validAnagram2("aaz", "zza");
validAnagram2("anagram", "nagaram");
validAnagram2("rat", "car");
validAnagram2("awesome", "awesom");
validAnagram2("qwerty", "qeywrt");
validAnagram2("texttwisttime", "timetwisttext");
