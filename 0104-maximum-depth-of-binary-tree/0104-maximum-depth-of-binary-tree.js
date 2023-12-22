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
    let answer = 0;
    
    const dfs = (node, count) => {
        if(!node) return;
        
        if(!node.left && !node.right) {
            answer = Math.max(answer, count);
        }
        
        if(node.left) dfs(node.left, count+1);
        if(node.right) dfs(node.right, count+1);
    }
    
    dfs(root, 1);
    
    return answer;
};