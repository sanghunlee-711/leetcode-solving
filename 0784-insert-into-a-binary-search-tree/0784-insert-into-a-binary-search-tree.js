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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    //삽입
    if(!root) return new TreeNode(val);
    //탐색
    if(val > root.val) root.right = insertIntoBST(root.right, val);
    else if(val < root.val) root.left = insertIntoBST(root.left, val);
    return root;
};