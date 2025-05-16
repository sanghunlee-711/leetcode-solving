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
 * @return {number[][]}
 dfs진행하며 currNode를 계속 push 및 currSum도 업데이트
 leaf도달 시  >. !left. &&. !right currSum과 targetSum 같은지 판다
 */
var pathSum = function(root, targetSum) {
    const res = [];
    function dfs(node, currNodes, currSum) {
        if(!node) return;

        const nextNodes = [...currNodes, node.val];
        const nextSum = currSum + node.val

        if(!node.left && !node.right && targetSum === nextSum) {
            res.push([...nextNodes])
            return;
        }
        if(node.left) dfs(node.left, nextNodes, nextSum)
        if(node.right) dfs(node.right, nextNodes, nextSum)
    }

    dfs(root, [], 0)
 
    return res;
};