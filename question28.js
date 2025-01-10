// 28. Find the Index of the First Occurrence in a String
// Solved
// Easy
// Topics
// Companies
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.


//this is my solution and it will not work some edge cases are here
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let max = needle.length;
  let left = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[left]) {
      left++;
    }

    if (left === max) {
      return i - (max - 1);
    }
  }
  return -1;
};

console.log(strStr("sad", "sa"));

// this i got the answer from claude which is simple using method in javascript 

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};
//anwer using o(n2)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // Handle empty needle case
  if (needle.length === 0) return 0;
  
  for (let i = 0; i <= haystack.length - needle.length; i++) {
      let match = true;
      
      // Check each character of needle
      for (let j = 0; j < needle.length; j++) {
          if (haystack[i + j] !== needle[j]) {
              match = false;
              break;
          }
      }
      
      if (match) return i;
  }
  
  return -1;
};
// Here's an optimized solution using the KMP (Knuth-Morris-Pratt) algorithm, which is one of the most efficient ways to solve this string matching problem:

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number} 
 */
var strStr = function(haystack, needle) {
  // Handle edge cases
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  // Build the LPS (Longest Proper Prefix which is also Suffix) array
  const lps = new Array(needle.length).fill(0);
  let prevLPS = 0, i = 1;
  
  while (i < needle.length) {
      if (needle[i] === needle[prevLPS]) {
          lps[i] = prevLPS + 1;
          prevLPS++;
          i++;
      } else if (prevLPS === 0) {
          lps[i] = 0;
          i++;
      } else {
          prevLPS = lps[prevLPS - 1];
      }
  }
  
  // Search for the pattern
  let haystackPtr = 0, needlePtr = 0;
  
  while (haystackPtr < haystack.length) {
      if (haystack[haystackPtr] === needle[needlePtr]) {
          haystackPtr++;
          needlePtr++;
          
          if (needlePtr === needle.length) {
              return haystackPtr - needle.length;
          }
      } else if (needlePtr === 0) {
          haystackPtr++;
      } else {
          needlePtr = lps[needlePtr - 1];
      }
  }
  
  return -1;
};