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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0;
    
    const stack = [[root, 0, new Map([[0,1]])]];
    let count = 0;
    
    while(stack.length) {
        const [node, sumSofar, map] = stack.pop();
        const nextSum = sumSofar + node.val;
        
        const trackedSum = nextSum - targetSum;
        if(map.has(trackedSum)) count += map.get(trackedSum);
        
        map.set(nextSum, (map.get(nextSum) || 0) + 1)
        
        if(node.right) stack.push([node.right, nextSum, new Map(map)]);
        if(node.left) stack.push([node.left, nextSum, new Map(map)]);
    }
    
    return count;
};