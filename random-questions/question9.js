// 9. Palindrome Number
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

//my answer not the best method
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString();
  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] != x[x.length - 1 - i]) return false;
  }
  return true;
};
//got this answer from leetcode
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  let r = x;
  let p = 0;
  let l = 0;

  while (r !== 0) {
    l = r % 10;
    r = Math.floor(r / 10);
    p = p * 10 + l;
  }

  return x === p;
};

//got this answer from ai
var isPalindrome = function (x) {
  // Handle negative numbers and numbers ending with 0
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

  let reversed = 0;
  // Only reverse half the number
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // For even length: x === reversed
  // For odd length: x === Math.floor(reversed / 10)
  return x === reversed || x === Math.floor(reversed / 10);
};
