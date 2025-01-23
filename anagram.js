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

console.log(isAnagram("hello", "llohhe"));
