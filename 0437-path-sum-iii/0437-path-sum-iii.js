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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0;
    let count = 0;
    const map = new Map();
    
    const dfs = (node, sum) => {
        if(!node) return null;
        const newSum = node.val + sum;
        
        if(newSum === targetSum) count++;
        if(map.has(newSum - targetSum)) count += map.get(newSum - targetSum);    
        
        map.set(newSum, (map.get(newSum) || 0) + 1)
        
        if(node.left) dfs(node.left, newSum);
        if(node.right) dfs(node.right, newSum);
        
        //backtracking
        map.set(newSum, (map.get(newSum) || 0) - 1)
    }
    
    dfs(root, 0)
    
    return count;
};