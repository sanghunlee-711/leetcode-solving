/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 postorder: left -> right -> root
 inorder: left -> root -> right
 */
var buildTree = function(inorder, postorder) {
    //edge
    if(!inorder.length || !postorder.length) return null;
    const rootVal = postorder[postorder.length - 1];
    const root = new TreeNode(rootVal);

    const i = inorder.indexOf(rootVal);

    root.left = buildTree(
        inorder.slice(0, i),
        postorder.slice(0, i),
    )

    root.right = buildTree(
        inorder.slice(i+1),
        postorder.slice(i, postorder.length - 1)
    )

    return root;
};