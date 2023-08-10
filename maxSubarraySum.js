// Not so great solution - O(n2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return console.log(null);
  }

  let temp;
  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }

  return console.log(max);
}

maxSubarraySum([1, 2, 3, 4, 5, 6], 2);

// Better solution - sliding windows pattern - O(n)
function maxSubarraySum(arr, num) {
  if (arr.length < num) return console.log(null);
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return console.log(maxSum);
}
maxSubarraySum([1, 2, 3, 4, 5, 6], 2);
