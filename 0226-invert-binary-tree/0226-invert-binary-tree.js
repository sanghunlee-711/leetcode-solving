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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const reverse = (node) => {
        if(!node) return node;

        const tmp = node.left;
        node.left = node.right;
        node.right = tmp;

        reverse(node.left);
        reverse(node.right);
    }

    reverse(root);

    return root;
};