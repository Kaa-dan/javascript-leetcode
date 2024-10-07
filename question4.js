// 4. Median of Two Sorted Arrays

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// my logic its not good
var findMedianSortedArrays = function (nums1, nums2) {
  const newArray = [];

  while (nums1.length > 0 || nums2.length > 0) {
    if (nums1.length > 0 && nums2.length > 0) {
      // Compare the first elements and shift the smaller one
      if (nums1[0] > nums2[0]) {
        newArray.push(nums2.shift());
      } else {
        newArray.push(nums1.shift());
      }
    } else {
      if (nums1.length > 0) {
        newArray.push(...nums1);
        break;
      } else {
        newArray.push(...nums2);
        break;
      }
    }
  }

  return (
    (newArray[Math.floor(newArray.length / 2)] +
      newArray[Math.floor((newArray.length - 1) / 2)]) /
    2
  );
};

console.log(findMedianSortedArrays([1, 3], [2]));
