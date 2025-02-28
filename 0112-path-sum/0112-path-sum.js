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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    targetSum -= root.val;

    if(hasPathSum(root.left, targetSum)) return true;
    if(hasPathSum(root.right, targetSum)) return true;

    const isEnd = !root.left && !root.right;
    
    return targetSum === 0 && isEnd
};