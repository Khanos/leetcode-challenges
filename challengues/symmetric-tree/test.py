import unittest
from utils.TreeNode import TreeNode
from .main import Solution

class TestSolution(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_isSymmetric_empty_tree(self):
        self.assertEqual(self.solution.isSymmetric(None), True)

    def test_isSymmetric_single_node(self):
        root = TreeNode(1)
        self.assertEqual(self.solution.isSymmetric(root), True)

    def test_isSymmetric_multiple_nodes(self):
        root = TreeNode(1)
        root.left = TreeNode(2)
        root.right = TreeNode(2)
        self.assertEqual(self.solution.isSymmetric(root), True)

    def test_isSymmetric_complex_tree(self):
        root = TreeNode(1)
        root.left = TreeNode(2)
        root.right = TreeNode(2)
        root.left.left = TreeNode(3)
        root.left.right = TreeNode(4)
        root.right.left = TreeNode(4)
        root.right.right = TreeNode(3)
        self.assertEqual(self.solution.isSymmetric(root), True)

if __name__ == '__main__':
    unittest.main()