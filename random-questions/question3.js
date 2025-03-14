// 3. Longest Substring Without Repeating Characters

// Hint
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
/**
 * @param {string} s
 * @return {number}
 */

// my solution
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  const size = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(s[right]);
      right++;
      size = Math.max(set.size, size);
    }
  }
  return size;
};

// optimised solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  const charMap = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (charMap.has(s[right]) && charMap.get(s[right]) >= left) {
      left = charMap.get(s[right]) + 1;
    } else {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    charMap.set(s[right], right);
  }

  return maxLength;
};

//using object

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let left = 0;
  const map = {};

  for (let right = 0; right < s.length; right++) {
    if (map[s[right]] >= left) {
      left = map[s[right]] + 1;
    }
    max = Math.max(max, right - left + 1);
    map[s[right]] = right;
  }

  return max;
};

var lengthOfLongestSubstring = function (s) {
  const map = {};
  let max = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // work on this difference between >= and >
    if (map[s[right]] >= left) {
      left = map[s[right]] + 1;
    }
    map[s[right]] = right;
    max = Math.max(max, right - left + 1);
  }
  return max;
};

//using asci code
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const chars = new Array(128).fill(-1);
  let max = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const code = s.charCodeAt(right);
    left = Math.max(left, chars[code] + 1);
    max = Math.max(max, right - left + 1);
    chars[code] = right;
  }

  return max;
};

// using map

var lengthOfLongestSubstringMap = function (s) {
  const map = new Map();
  let max = 0;
  let left = 0;

  if (s.length <= 1) return s.length;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (map.has(char)) {
      left = Math.max(left, map.get(char) + 1);
    }
    map.set(char, right);
    max = Math.max(max, right - left + 1);

    if (max >= s.length - left) break;
  }

  return max;
};
