/* 
  Write a function called sumZero which accepted a sorted array of integers. 
  The function should find a first pair where the sum is 0.
  Return a array that includes both values that sum to zero or undefined if a pair does not exist.
*/

// naive solution O(n2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// better solution => Time complexity O(n)
function betterSumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined
console.log(betterSumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(betterSumZero([-2, 0, 1, 3])); // undefined
console.log(betterSumZero([1, 2, 3])); // undefined

// next 031 multiple pointers count unique values challenge
