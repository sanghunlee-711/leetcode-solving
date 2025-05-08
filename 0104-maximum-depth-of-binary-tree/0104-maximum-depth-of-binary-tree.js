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
 max를 표현할 변수
 dfs를 통해 가장 깊은 길이 판단.
 N은 노드의 개수, H는 트리의 높이
 T.C: O(N*H) 
 S.C: O(H) 
 */
var maxDepth = function(root) {
    let max = 0;

    function dfs(node, val) {
        //base
        if(!node) return;
        const currVal = val + 1;
        max = Math.max(max, currVal);

        if(node.left) dfs(node.left, currVal);
        if(node.right) dfs(node.right, currVal);
    }

    dfs(root, 0);

    return max;
};