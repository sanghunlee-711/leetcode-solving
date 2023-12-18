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
    
    if(!root) return answer;
    
    const dfs = (node, depth) => {
        if(!node) return;
        
        //leaf
        if(!node.left && !node.right) {
            answer = Math.max(depth, answer);
            return;
        }
        
        // binary tree's maximum depth 
        if(node.left) dfs(node.left, depth+1);
        if(node.right) dfs(node.right, depth+1);
    }
    
    //시작은 1
    dfs(root, 1);
    
    return answer;
};