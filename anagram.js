function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequency1 = {};
  let frequency2 = {};

  const splitedStr1 = str1.split("");
  const splitedStr2 = str2.split("");

  for (const s of splitedStr1) {
    frequency1[s] = (frequency1[s] || 0) + 1;
  }
  for (const s of splitedStr2) {
    frequency2[s] = (frequency2[s] || 0) + 1;
  }

  for (const key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }

  return true;
}

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// console.log(isAnagram("hello", "llohhe"));
console.log(validAnagram("hello", "llohh"));
