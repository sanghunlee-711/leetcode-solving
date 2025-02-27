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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    const queue = [],
        res = [];
    let level = 0;

    if(root !== null) {
        queue.push(root)
    };

    while(queue.length > 0) {
        const len = queue.length;

        for(let i = 0; i < len; i++) {
            const curr = queue.shift();
            
            if(res[level]) res[level].push(curr.val);
            else res[level] = [curr.val]

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        level += 1;
    }
    return res;
};