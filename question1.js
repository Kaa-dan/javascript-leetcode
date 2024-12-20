// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//my solution
var twoSum = function (nums, target) {
  //map for storing the previous elements
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    //remainder to check if it exist inside map
    let remainder = target - nums[i];

    if (map.has(remainder)) {
      return [map.get(remainder), i];
    }

    map.set(nums[i], i);
  }
};

//ai solution

var twoSum = function (nums, target) {
  if (!Array.isArray(nums) || typeof target !== "number") {
    throw new Error("Invalid input");
  }

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }

  return []; // No solution found
};

var twoSum = function (nums, target) {
  if (nums.length < 3) return [0, 1];
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (obj[remainder] !== undefined) {
      return [obj[remainder], i];
    }
    obj[i] = i;
  }
  return [];
};

//beated 100% with this code
var twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    if (map.has(remainder)) {
      return [map.get(remainder), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
