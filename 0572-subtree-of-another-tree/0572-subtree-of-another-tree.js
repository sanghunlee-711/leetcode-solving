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
 * @param {TreeNode} subRoot
 * @return {boolean}
 탐색하다 같은 것 찾으면 같이 탐색 진행,
다른 부분 없으면 true 있으면 false

 */

function compare(node1, node2) {
    if(!node1 && !node2) return true;
    if(!node1 || !node2) return false;
    if(node1.val !== node2.val) return false;
    const left = compare(node1.left, node2.left),
    right = compare(node1.right, node2.right);

    return left && right;
}

var isSubtree = function(root, subRoot) {
    const compareStartVal = subRoot.val;

    // 탐색을 끝까지 진행,
    // compare를 반환하지 못하면 false가 되지 않나
    function dfs(node) {
        if(!node) return false;
        if(compare(node, subRoot)) return true;
        return dfs(node.left) || dfs(node.right);
    }

    const result = dfs(root);

    return result;
};