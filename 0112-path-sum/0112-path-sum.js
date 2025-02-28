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
    let res = false;

  const dfs = (node, sum) => {
    const currSum = sum + node.val;
    
    const isEnd = !node.left && !node.right;
    if(isEnd && currSum === targetSum) {
        res = true;
        return;
    }

    if(node.left) dfs(node.left, currSum)
    if(node.right) dfs(node.right, currSum)
    
    return false;
  }  

  dfs(root, 0)

  return res;
};