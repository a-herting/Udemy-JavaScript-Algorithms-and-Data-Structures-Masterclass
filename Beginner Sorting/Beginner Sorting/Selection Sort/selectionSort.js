// Selection Sort
// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array.
// If the minimum is snot the value you initially began with, swap the 2 values
// Repeat this with the next element until the array is sorted
function selectionSort(arr) {
  let lowest = 0;
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}