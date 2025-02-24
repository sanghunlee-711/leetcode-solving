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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [];

    function inorder(node) {
        if(!node) return;
        if(node.left) inorder(node.left);
        arr.push(node.val);
        if(node.right) inorder(node.right);
    }

    inorder(root);
    
    return arr[k-1]
};