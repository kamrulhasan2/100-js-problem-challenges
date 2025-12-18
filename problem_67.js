//? Q:67. Write a function to find the lowest common ancestor of two nodes in a BST.

//? The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).

//* Constraints:
//? All of the nodes' values will be unique.
//? p and q will exist in the BST.


// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }
// const lowestCommonAncestor = (root, p, q) => {};


// My solution (iterative)
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const lowestCommonAncestor = (root, p, q) => {
    let node = root;
    while (node) {
        if (p.val > node.val && q.val > node.val) {
            node = node.right;
        } else if (p.val < node.val && q.val < node.val) {
            node = node.left;
        } else {
            return node;
        }
    }
    return null;
};

// Example
const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

const p = root.left; // node with value 2
const q = root.right; // node with value 8

console.log(lowestCommonAncestor(root, p, q).val); // Output: 6
