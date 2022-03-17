// Merging arrays
// Write a function that takes in 2 arrays and returns a merged and sorted array.
//Psuedocode:
// Create an empty array, take a look at the smallest values in each input array. Two counters. Use while loops, i and j start at 0.
// If the value in the 1st array is smaller than the value in the 2nd, push the value in the first array into our results and move on to the next value in the first array. length
// If the value in the 1st array is larger than the value in the 2nd array, push the value in the 2nd array into our results and move on to the next value in the 2nd array. Once we exhaust on array, push in all remainin gvalues from the other array.

// Only works with sorted arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  let counter1 = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// // mergeSort Psuedocode
// // Break up the array into halves until you have arrays that are empty or have one element use slice method
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
