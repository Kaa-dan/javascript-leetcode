// 13. Roman to Integer
// Solved
// Easy
// Topics
// Companies
// Hint
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

//my answer not optimised solution
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanMap[s[i]] >= romanMap[s[i + 1]] || !romanMap[s[i + 1]]) {
      sum = sum + romanMap[s[i]];
    } else {
      sum = romanMap[s[i + 1]] - romanMap[s[i]] + sum;
      i++;
    }
  }
  console.log(sum);
  return sum;
};

//this answer is given by claude

var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  // Instead of checking next value, we can check current against previous
  // This eliminates the need for the i++ skip
  for (let i = s.length - 1; i >= 0; i--) {
    const current = romanMap[s[i]];
    const prev = romanMap[s[i + 1]] || 0;

    sum += current >= prev ? current : -current;
  }

  return sum;
};




/**
 * Approach 1: Single Pass with Map (Time: O(n), Space: O(1))
 * Most straightforward and readable approach
 */
var romanToInt1 = function(s) {
  const values = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  
  let result = 0;
  for (let i = 0; i < s.length; i++) {
      const curr = values[s[i]];
      const next = values[s[i + 1]] || 0;
      result += curr < next ? -curr : curr;
  }
  return result;
};

/**
* Approach 2: Single Pass with Switch (Time: O(n), Space: O(1))
* Slightly better memory usage as it avoids object creation
*/
var romanToInt2 = function(s) {
  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
      const curr = getValue(s[i]);
      const next = i + 1 < s.length ? getValue(s[i + 1]) : 0;
      result += curr < next ? -curr : curr;
  }
  return result;
};

function getValue(char) {
  switch(char) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return 0;
  }
}

/**
* Approach 3: String Replacement (Time: O(n), Space: O(1))
* Handles special cases first, then sums regular values
*/
var romanToInt3 = function(s) {
  s = s.replace('IV', 'IIII')
       .replace('IX', 'VIIII')
       .replace('XL', 'XXXX')
       .replace('XC', 'LXXXX')
       .replace('CD', 'CCCC')
       .replace('CM', 'DCCCC');
  
  let result = 0;
  for (let char of s) {
      switch(char) {
          case 'I': result += 1; break;
          case 'V': result += 5; break;
          case 'X': result += 10; break;
          case 'L': result += 50; break;
          case 'C': result += 100; break;
          case 'D': result += 500; break;
          case 'M': result += 1000; break;
      }
  }
  return result;
}