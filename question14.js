// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

//my answer it is not efficient
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let firstWord = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let word = "";
    for (let j = 0; j < strs[i].length; j++) {
      if (firstWord[j] !== strs[i][j]) {
        break;
      }
      word += firstWord[j];
    }
    firstWord = word;
  }
  return firstWord;
};

//claude given this answer
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  // Take first string as reference
  let prefix = strs[0];

  // For each remaining string
  for (let i = 1; i < strs.length; i++) {
    // While the current string doesn't start with our prefix
    while (strs[i].indexOf(prefix) !== 0) {
      // Shorten prefix by one character
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

//using binary search

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  // Find minimum length string
  let minLen = Math.min(...strs.map((str) => str.length));

  let low = 0;
  let high = minLen;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isCommonPrefix(strs, mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return strs[0].substring(0, Math.floor((low + high) / 2));
};

function isCommonPrefix(strs, len) {
  let prefix = strs[0].substring(0, len);
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(prefix)) return false;
  }
  return true;
}
