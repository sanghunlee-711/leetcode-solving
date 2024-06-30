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
var rightSideView = function(root) {
    //base
    if(!root) return [];
    
    const queue = [root];
    const result = [];
    
    while(queue.length > 0) {
        
        const len = queue.length;
        
        for(let i = 0; i < len; i++) {
            const node = queue.shift();
            
            if(len-1 === i) result.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return result;
};