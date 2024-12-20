// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  let dummy = new ListNode();

  let curr = dummy;

  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {

    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;

    curr.next = new ListNode(sum % 10);

    carry = Math.floor(sum / 10);

    curr = curr.next;

    l1 = l1?.next || null;

    l2 = l2?.next || null;
  }

  return dummy.next;
};

//optimised answer
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const x = l1?.val ?? 0;
    const y = l2?.val ?? 0;

    curr.next = new ListNode((x + y + carry) % 10);
    //bitwise operation is not efficient
    carry = ~~((x + y + carry) / 10);
    curr = curr.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return dummy.next;
};




//claude ai result 
var addTwoNumbers = function (l1, l2) {
  let resultList = new ListNode(0);
  let currentNode = resultList;
  let remainder = 0;

  while (l1 || l2 || remainder) {
      let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + remainder;
      remainder = Math.floor(sum / 10);
      currentNode.next = new ListNode(sum % 10);
      currentNode = currentNode.next;

      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
  }

  return resultList.next;
};