// helper function getDigit(num,place) - returns the digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


// helper function digitCount(num) - returns the number of digits in the num
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}


// helper function mostDigits(nums) - given an array of numbers, returns the number of digits in the largest numbesr in the list.
function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}


// Radix Psuedocode
// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has
// Loop from k=0 up to this largest number of digits
// For each iteration of the loop: Create buckets for each digit(0 to 9) array w/ 10 subarrays
// Outer loop happens k times, and inner loop that does something to each number in the list
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}