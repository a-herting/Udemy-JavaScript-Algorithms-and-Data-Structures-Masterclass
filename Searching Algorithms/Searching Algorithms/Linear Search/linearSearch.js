// Linear search pseudcode
// This function accepts an array and a value
// Loop through the entire array and check if the current array element is
// equal to the value. If it is, return the index at which the element is ///// found.
// Below is what indexOf(), findIndex(), includes() to behind the scenes

// Big O = O(N)
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}
