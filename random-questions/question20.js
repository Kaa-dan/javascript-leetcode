// 20. Valid Parentheses
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

//my solution not optimised
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[" || s[i] === "{" || s[i] === "(") stack.push(s[i]);
    else {
      if (s[i] === "]" && stack[stack.length - 1] === "[") stack.pop();
      else if (s[i] === ")" && stack[stack.length - 1] === "(") stack.pop();
      else if (s[i] === "}" && stack[stack.length - 1] === "{") stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
};

// claude ai given me this code

var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const pairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let char of s) {
    if (!pairs[char]) {
      stack.push(char);
    } else if (stack.pop() !== pairs[char]) {
      return false;
    }
  }

  return stack.length === 0;
};

//using map
const isValid = (s) => {
  if (s.length % 2) return false;

  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for (const char of s) {
    if (map.has(char)) {
      stack.push(map.get(char));
    } else if (char !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};
