// My soulution - multiple pointers pattern
function countUniqueValues(arr) {
  if (arr.length === 0) return console.log(0);

  let first = 0;
  let second = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[first] === arr[second]) {
      second += 1;
    } else {
      arr.splice(first + 1, 1, arr[second]);
      first += 1;
      second += 1;
    }
  }

  return console.log(arr.slice(0, first).length);
}

countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);
countUniqueValues([1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);

// Udemy soulution - Multiple pointers pattern
function countUniqueValues(arr) {
  if (arr.length === 0) return console.log(0);

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return console.log(i + 1);
}

countUniqueValues([1, 2, 3, 3]);
countUniqueValues([1, 1, 2, 2, 2, 3, 3, 3, 4]);
countUniqueValues([1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6, 7, 8, 9]);
countUniqueValues([]);
