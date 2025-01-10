// 26. Remove Duplicates from Sorted Array
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

//my solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let map = {};
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = nums[i];
      nums[left] = nums[i];
      left++;
    }
  }
  return left;
};

// claude ai solution

var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length;

  let writePointer = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[writePointer - 1]) {
      nums[writePointer] = nums[i];
      writePointer++;
    }
  }

  return writePointer;
};
