/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Using recursion and Math.max!
var maxDepth = function(root) {
  if(root === null) {
    return 0;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  const currentDepth = Math.max(left, right);
  return  currentDepth + 1;
};

export default maxDepth;