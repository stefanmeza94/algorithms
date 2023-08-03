// Time complexity - O(n^2)
// Space complexity - O(1)
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return console.log([arr[i], arr[j]]);
//       }
//     }
//   }
//   return console.log(undefined);
// }

// sumZero([-3, -2, -1, 0, 1, 2, 3]);
// sumZero([-2, 0, 1, 3]);
// sumZero([1, 2, 3]);

// Time complexity - O(n)
// Space complexity - O(1)
// Multiple pointers pattern - koristimo dva pointera (prvi i poslednji u array) i tako uporedjujemo svaku mogucu kombinaciju sve dok ne nadjemo par, ili vratimo undefined ako par ne postoji
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return console.log([arr[left], arr[right]]);
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);

// nastavi od 32. Multiple Pointers: Count Unique Values Challenge
