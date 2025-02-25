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
 */
var buildTree = function(preorder, inorder) {
    // 3,9,20,15,7
    //pre: root -> left -> right 
    //in: left -> root -> right; // n: curr 2*n -1 => right, 2*n+1 => left

    if(!preorder.length || !inorder.length) return null;
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    let mid = inorder.indexOf(rootVal);

    root.left = buildTree(
        preorder.slice(1, mid + 1),
        inorder.slice(0, mid),
    )

    root.right = buildTree(
        preorder.slice(mid+1),
        inorder.slice(mid+1),
    )
    
    
    return root;
};