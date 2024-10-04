import {TreeNode, TreeNodeFromArray} from './TreeNode'

describe('#TreeNode', () => {
  it('should create a TreeNode', () => {
    const node = new TreeNode(1);
    expect(node.val).toBe(1);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });
});

describe('#TreeNodeFromArray', () => {
  it('should create a TreeNode from an array', () => {
    const root = TreeNodeFromArray([3,9,20,null,null,15,7,5]);
    expect(root.val).toBe(3);
    expect(root.left.val).toBe(9);
    expect(root.right.val).toBe(20);
    expect(root.right.left.val).toBe(15);
    expect(root.right.right.val).toBe(7);
    expect(root.right.left.left.val).toBe(5);
  });
});