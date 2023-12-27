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
// dfs인자로 node, max, count를 받자
// 현재 node.val이 맥스보다 작으면 Count를 안올리면 됨.
var goodNodes = function(root) {
   let goodCount = 0;
    
    const dfs = function(node, max) {
        //base condition
        if(!node) return;
        
        if(node.val >= max) goodCount+=1;
        max = Math.max(max, node.val);
        
        if(node.left) dfs(node.left, max);
        if(node.right) dfs(node.right, max);
    }
    
    dfs(root, root.val);
    
    return goodCount;
};