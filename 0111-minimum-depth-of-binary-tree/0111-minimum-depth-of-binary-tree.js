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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0

    const queue = [root];
    let minDepth = 1;

    while(queue.length > 0) {
        const len = queue.length;

        for(let i = 0; i < len; i++) {
            const node = queue.shift();

            if(!node.left && !node.right) return minDepth;
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        minDepth++;
    }

    return minDepth;
};