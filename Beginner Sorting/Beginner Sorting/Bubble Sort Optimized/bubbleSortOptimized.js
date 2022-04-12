// Bubble Sort pseudocode
// Start looping with a variable called i set to arr.length and loop from the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i-1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

// Optimized with noswaps variable
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
