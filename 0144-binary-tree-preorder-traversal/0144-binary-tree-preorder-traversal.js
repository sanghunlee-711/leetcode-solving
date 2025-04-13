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
 * @return {number[]}
 //root -> left ->  right
 */
var preorderTraversal = function(root) {
    const res = [];
    let stack = [];
    let curr = root;

    while(curr !== null || stack.length !== 0) {
        if(curr) {
            res.push(curr.val); // root출력

            if(curr.right) stack.push(curr.right); //오른쪽 임의 저장

            curr = curr.left; //왼쪽으로 이동
        } else curr= stack.pop() //왼쪽 다 한 경우 오른쪽 시작
    }

    return res;
};