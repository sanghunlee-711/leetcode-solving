/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
N은 노드 개수 H는 트리의 높이
T.C: O(N) : 모든 노드를 탐색하나 두 트리의 크기가 같다고 판단.
S.C: O(H) : 재귀 스택이 트리 높이 만큼 쌓이게 됨
 */
var isSameTree = function(p, q) {
    //둘 다 없으면 종결이므로 true
    if(!p && !q) return true;
    //둘중 하나라도 없으면 false
    if(!p || !q) return false;
    //다른 값인 경우 false
    if(p.val !== q.val) return false;
    
    const result = isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

    return result;
};