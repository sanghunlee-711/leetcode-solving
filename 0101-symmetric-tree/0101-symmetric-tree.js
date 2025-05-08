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
 * @return {boolean}

 N은 노드의 개수, H는 트리의 높이
T.C: O(N) : 모든 노드 탐색하므로
S.C: O(H): 재귀 호출 깊이가 트리 높이 만큼 생겨 메모리를 차지하므로
 */
var isSymmetric = function(root) {
    //edge
    if(!root) return true;

    function dfs(p, q) {
        //둘다 undefined면 종결
        if(!p && !q) return true;
        if(!p || !q) return false;
        //둘중 하나라도 값 다르면 False
        if(p.val !== q.val) return false;
        
        const result = dfs(p.right, q.left) && dfs(p.left, q.right);
        
        return result;
    }

    return dfs(root.left, root.right)
};