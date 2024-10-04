const TreeNode = function(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined) ? null : left;
  this.right = (right === undefined) ? null : right;
};

const TreeNodeFromArray = function(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }
  return root;
};

export {
  TreeNode,
  TreeNodeFromArray,
};