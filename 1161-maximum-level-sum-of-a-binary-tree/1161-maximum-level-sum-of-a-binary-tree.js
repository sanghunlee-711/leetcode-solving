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
//1. bfs -> sum in each level
//2. after summing reset the maxValue;
var maxLevelSum = function(root) {
    let max = -Infinity;
    let level = 0,
        maxLevel = 0;
    
    const queue = [root];
    
    while(queue.length > 0) {
        let currLen = queue.length;
        level += 1;
        //reset sum in every level
        let sum = 0;
        
        
        for(let i = 0; i < currLen; i++) {
            const node = queue.shift();
            sum += node.val;
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            
        }
        
        // update max in every level
        if(sum > max) {
            max = sum;
            maxLevel = level
        }
    }
    
    return maxLevel;
};