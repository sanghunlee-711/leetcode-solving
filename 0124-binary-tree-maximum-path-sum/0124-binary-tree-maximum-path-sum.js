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
 * @description
    한 노드로 시작해서 다른 노드로 끝나는 게 되어야함
    자식 -> 부모 -> 자식이어도 중복 없는 한 경로면 가능
    1. 한쪽 방향으로만 뻗는 최대 경로합
        maxSinglePath = Math.max(left, right, 0) + currNode.val
    2. 현재 노드가 루트인 경우에서의 좌 + 루트 + 우 인 경우의 최대 합
        maxPathThroughRoot = left + right + currNode.val
 */
var maxPathSum = function(root) {
    let max = -Infinity;

    function dfs(node) {
        if(!node) return 0;
        
        //최대값 찾는 것이므로 음수는 0 처리
        const left = Math.max(dfs(node.left), 0);
        const right = Math.max(dfs(node.right), 0);

        //현재 노드 루트인 경우의 최대경로 합
        max = Math.max(max, left + right + node.val);
        // 부모로 반환하기 위한 값
        return node.val + Math.max(left, right)
    }

    dfs(root)

    return max;  
};