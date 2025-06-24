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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function dfs(node) {
        if(!node) return {height: 0, isBalanced: true};
        const left = dfs(node.left);
        if(!left.isBalanced) return {height: 0, isBalanced: false}
        const right = dfs(node.right);
        if(!right.isBalanced) return {height: 0, isBalanced: false}

        

        return {
            isBalanced: Math.abs(left.height - right.height) <= 1, height: 1 + Math.max(left.height, right.height)
        }
    }

    return dfs(root).isBalanced
};