// bubble sort - first example
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log("ONE PASS COMPLETE");
  }
  return arr;
}

// console.log(bubbleSort([45, 12, 24, 4]));

// bubble sort - more optimize example - where we exclude unnecessary comparison
function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log("ONE PASS COMPLETE");
  }
}

// bubbleSort2([2, 24, 17, 8]);

// bubble sort - es5 way of swaping
function bubbleSort3(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
    console.log("ONE PASS COMPLETE");
  }

  return arr;
}

// bubbleSort3([2, 24, 17, 8]);

// Optimized with no swaps if array is nearly sorted, there is no point to loop through array if array is sorted after first iteration like in this example: [8, 1, 2, 3] => [1, 2, 3, 8]
function bubbleSort4(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
}

bubbleSort4([8, 1, 2, 3]);
