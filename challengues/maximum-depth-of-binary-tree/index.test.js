import maxDepth from './index';
import {TreeNodeFromArray} from '../../utils//TreeNode';

describe('#maxDepth', () => {
  it('should return the maximum depth for the given array', () => {
    const root = TreeNodeFromArray([3,9,20,null,null,15,7]);
    expect(maxDepth(root)).toBe(3);
  });
});