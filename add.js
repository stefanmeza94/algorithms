function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

const t1 = performance.now();
addUpTo2(100000000000000);
const t2 = performance.now();

// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

function double(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }

  return newArr;
}

console.log(sum([1, 2, 3, 4, 5, 6]));
console.log(double([1, 2, 3, 4, 5, 6, 7, 8]));
