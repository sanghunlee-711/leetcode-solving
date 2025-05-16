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
 누가봐도 dfs이긴 한데 + 백트래킹
 해시맵의 키: 합의 값 value: 카운트
 누적합 활용하면 됨

 */
var pathSum = function(root, targetSum) {
    const map = new Map();
    let count = 0;
    map.set(0,1);
    
    function dfs(node, currSum){
        if(!node) return;
        currSum += node.val; //현재 값 추가
        if(map.has(currSum - targetSum)) count += map.get(currSum - targetSum);

        map.set(currSum, (map.get(currSum) || 0) + 1); //합에 대한 카운트 추가
        if(node.left) dfs(node.left, currSum)
        if(node.right) dfs(node.right, currSum)
        map.set(currSum, map.get(currSum) - 1); //경로 독립성 보장을 위함
    }

    dfs(root, 0)

    return count
};