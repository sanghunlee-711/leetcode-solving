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
 * @return {TreeNode}
 left = right 로 재귀로 바꾸면 될 것. ㅏㅌ음
 T.C: O(N)
 S.C: O(h)// 재귀트리 호출 깊이
 */
var invertTree = function(root) {
    function invert(node) {
        if(!node) return 
            
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        invertTree(node.left)
        invertTree(node.right)
        
    }
    invert(root);

    return root;
};