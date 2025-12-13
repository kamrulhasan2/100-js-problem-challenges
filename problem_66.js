//? Q:66. Write a function to validate a BST.

//? A valid BST is defined as follows:
//? - The left subtree of a node contains only nodes with keys less than the node's key.
//? - The right subtree of a node contains only nodes with keys greater than the node's key.
//? - Both the left and right subtrees must also be binary search trees.

//* Constraints:
//? The number of nodes in the tree is in the range [1, 10^4].
//? -2^31 <= Node.val <= 2^31 - 1


// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
// const isValidBST = (root) => {};


// My solution (recursive)
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const isValidBST = (root) => {
    const validate = (node, min, max) => {
        if (!node) {
            return true;
        }

        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }

        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    };

    return validate(root, null, null);
};

// Example 1: Valid BST
const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(tree1)); // Output: true

// Example 2: Invalid BST
const tree2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(tree2)); // Output: false
