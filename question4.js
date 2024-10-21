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

//optimised way to solve the problem ai

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0;
  let high = m;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxLeftX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const minRightX =
      partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];

    const maxLeftY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    const minRightY =
      partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted");
};



// i got this solution from leetcode 

var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length, n = nums2.length, mn = m + n;
    if (m > n) return findMedianSortedArrays(nums2, nums1);
    let mid = (mn + 1) >> 1, left = 0, right = m;
    while (left <= right) {
        let mid1 = (left + right) >> 1;
        let mid2 = mid - mid1;
        let l1 = l2 = Number.MIN_SAFE_INTEGER, r1 = r2 = Number.MAX_SAFE_INTEGER;
        if (mid1 - 1 >= 0) l1 = nums1[mid1 - 1];
        if (mid1 < m) r1 = nums1[mid1];
        if (mid2 - 1 >= 0) l2 = nums2[mid2 - 1];
        if (mid2 < n) r2 = nums2[mid2];
        if (l1 <= r2 && l2 <= r1) {
            if (mn % 2) return Math.max(l1, l2);
            else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0
        }
        if (l1 > r2) right = mid1 - 1;
        else left = mid1 + 1;
    }
    return 0;
};