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
var maxDepth = function(root) {
    let max = -Infinity;

    function dfs(node, depth) {
        if(!node) return;

        const currentDepth = depth + 1;
        max = Math.max(currentDepth, max);

        if(node.left) dfs(node.left, currentDepth)
        if(node.right) dfs(node.right, currentDepth)
    }

    dfs(root, 0);

    return max === -Infinity ? 0 : max;
};