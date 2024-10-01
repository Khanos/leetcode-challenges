/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// time: O(n)
// space: O(1)
var middleNode = function(head) {
    let end = head;
    let middle = head;
    while(end !== null && end.next !== null) {
      middle = middle.next;
      end = end.next.next;
    }
    return middle;
};
// m2 ->
// 2 -> m1 
// 2 -> m1 -> 7
// 2 -> 1 -> m7 -> 4
// 2 -> 1 -> m7 -> 4 -> 3
// 2 -> 1 -> 7 -> m4 -> 3 -> 9
// 2 -> 1 -> 7 -> m4 -> 3 -> 9 -> 7
// 2 -> 1 -> 7 -> 4 -> m3 -> 9 -> 7 -> 6

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// time: O(n)
// space = O(n)
var middleNode2 = function(head) {
  const result = [];
  let count = 0;
  let current = head;
  while(current !== null) {
    result.push(current.val);
    count++;
    current = current.next;
  }
  const middleIndex = Math.floor(count / 2);
  return result.filter((_, index) => index >= middleIndex);
};
// [1, 2, 3, 4, 5]
// 5 / 2 = 2
// [1, 2, 3, 4, 5, 6]
// 6 / 2 = 3

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// time: O(n) * O(log(n))
// space: O(n)
var middleNode3 = function(head) {
  const result = [];
  let count = 0;
  let current = head;
  while(current !== null) {
    result.push(current.val);
    count++;
    current = current.next;
  }
  const middleIndex = Math.floor(count / 2);
  current = head;
  for(let i = 0; i < middleIndex; i++) {
    current = current.next;
  }
  return current;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// time: O(n)
// space: O(1)
var middleNode4 = function(head) {
  let count = 1;
  let current = head;
  let middle = head;
  while(current !== null) {
    if(count % 2 === 0) {
      middle = middle.next;
    }
    count++;
    current = current.next;
  }
  return middle;
};

export {
  middleNode,
  middleNode2,
  middleNode3,
  middleNode4
}