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
    if(!root) return [];
    
    const queue = [root];
    const result = [];
    
    while(queue.length > 0) {
        const currLen = queue.length;
        
        for(let i = 0; i < currLen; i++) {
            const node = queue.shift(); //currNode;
            
            //the right === i === currLen - 1;
            if(i === currLen - 1) result.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
            
    
    }
    
    return result;
};