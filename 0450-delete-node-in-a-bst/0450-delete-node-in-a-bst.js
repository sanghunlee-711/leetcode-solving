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
 * @param {number} key
 * @return {TreeNode}
 BFS 
left is smaller right is bigger
if key is leaf node -> ?
if key is parent node -> ?
how to remove node -> 1. set val null ? 2. find node -> sort every node again without find node
 */

const successor = function(root) {
    root = root.right;
    while(root.left) root = root.left;
    return root.val
}

const predecessor = function(root) {
    root = root.left;
    while(root.right) root = root.right;
    return root.val
}

var deleteNode = function(root, key) {
    if(!root) return null;
    // 오른쪽 서브트리에서 삭제되는 경우
    if(key > root.val) root.right = deleteNode(root.right, key);
    // 왼쪽 서브트리에서 삭제되는 경우
    else if(key < root.val) root.left = deleteNode(root.left, key);
    // 현재 노드를 삭제해야하는 경우
    else {
        // 리프인 경우
        if(!root.left && !root.right) root = null;
        // right subtree에서 삭제해야하는 경우
        else if(root.right) {
            root.val = successor(root);
            root.right = deleteNode(root.right, root.val);
        }
        // left subtree에서 삭제해야하는 경우
        else {
            root.val = predecessor(root);
            root.left = deleteNode(root.left, root.val);
        }
    }
    return root;
};