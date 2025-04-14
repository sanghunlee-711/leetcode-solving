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
 */
var postorderTraversal = function(root) {
    const res = [];
    const stack = [root];
    const visit = [false];

    while(stack.length !== 0) {
        let curr= stack.pop();
        let visited = visit.pop();

        if(curr) {
            if(visited) res.push(curr.val);
            else {
                stack.push(curr);
                visit.push(true);

                stack.push(curr.right);
                visit.push(false);

                stack.push(curr.left);
                visit.push(false);
            }
        }
    }

    return res;
};