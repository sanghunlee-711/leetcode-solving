/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 preorder: root -> left -> right
 inorder: left -> root -> right
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    const idx = inorder.indexOf(rootVal);
    root.left = buildTree(
        preorder.slice(1, idx+1),
        inorder.slice(0,idx)
    )
    root.right = buildTree(
        preorder.slice(idx+1),
        inorder.slice(idx+1)
    )

    return root;
};