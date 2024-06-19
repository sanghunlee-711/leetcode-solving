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
var longestZigZag = function(root) {
    let max = 0;
    
    const dfs = (node, direction, depth) => {
        if(!node) return;
        max = Math.max(max, depth);
        
        if(node.right) {
            if(direction === "left") {
                dfs(node.right, "right", depth + 1)
            } else {
                //같은 방향이므로 지금 단계 이후로 업데이트 필요 x
                dfs(node.right, "right", 1)
            }
        } 
        
        if(node.left) {
            if(direction === "right") {
                dfs(node.left, "left", depth + 1)
            } else {
                //같은 방향이므로 지금 단계 이후로 업데이트 필요 x
                dfs(node.left, "left", 1)
            }
        }
        
    }
    dfs(root, "right", 0)
    dfs(root, "left", 0)
    
    return max;
};