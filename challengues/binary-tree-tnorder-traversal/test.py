import unittest
from utils.TreeNode import TreeNode
from .main import Solution

class TestSolution(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_inorderTraversal_empty_tree(self):
        self.assertEqual(self.solution.inorderTraversal(None), [])

    def test_inorderTraversal_single_node(self):
        root = TreeNode(1)
        self.assertEqual(self.solution.inorderTraversal(root), [1])

    def test_inorderTraversal_multiple_nodes(self):
        root = TreeNode(1)
        root.left = TreeNode(2)
        root.right = TreeNode(3)
        self.assertEqual(self.solution.inorderTraversal(root), [2, 1, 3])

    def test_inorderTraversal_complex_tree(self):
        root = TreeNode(1)
        root.left = TreeNode(2)
        root.right = TreeNode(3)
        root.left.left = TreeNode(4)
        root.left.right = TreeNode(5)
        root.right.left = TreeNode(6)
        root.right.right = TreeNode(7)
        self.assertEqual(self.solution.inorderTraversal(root), [4, 2, 5, 1, 6, 3, 7])

if __name__ == '__main__':
    unittest.main()