// same function with O(n2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // indexOf je u pozadini zapravo for petlja, tako da ovde imamo for unutar for petlje sto bi cinilo big o notaciju O(n2)
    const correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1);
  }

  return true;
}

same([2, 3, 4], [4, 9, 16]);
same([2, 3, 4], [4, 9, 16, 17]);

// same function but with O(n)
// Frequency Counter Pattern
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(false);
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return console.log(false);
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return console.log(false);
    }
  }

  return console.log(true);
}

same([2, 3, 2, 4], [4, 9, 16, 4]);
same([2, 3, 2, 4, 5], [4, 9, 16, 4]);
