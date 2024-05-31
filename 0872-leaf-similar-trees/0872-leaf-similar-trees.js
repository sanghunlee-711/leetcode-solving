/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const stack1 = [root1],
          stack2 = [root2],
          leaf1 = [],
          leaf2 = [];
    
    while(stack1.length) {
        const curr = stack1.pop();
        
        if(!curr.left && !curr.right) leaf1.push(curr.val);
        if(curr.left) stack1.push(curr.left)
        if(curr.right) stack1.push(curr.right)
    }
    
    while(stack2.length) {
        const curr = stack2.pop();
        
        if(!curr.left && !curr.right) leaf2.push(curr.val);
        if(curr.left) stack2.push(curr.left)
        if(curr.right) stack2.push(curr.right)
    }
    
    if(leaf1.length !== leaf2.length) return false;
    
    return  leaf1.every((leaf, idx) => leaf === leaf2[idx]);
};