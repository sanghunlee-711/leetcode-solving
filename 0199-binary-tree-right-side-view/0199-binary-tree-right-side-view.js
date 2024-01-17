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

//Bfs로 탐색하는데.. 제일 오른쪽만 남기면 된다.
var rightSideView = function(root) { 
    //base
    if(!root) return [];
    let queue = [root], 
        rightSideNode = [];
    
    while(queue.length > 0) {
        const thisLevelNodeLength = queue.length;
        
        for(let i = 0; i < thisLevelNodeLength; i++) {
            let node = queue.shift();
            console.log(node.val);
            if(i === thisLevelNodeLength - 1) rightSideNode.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return rightSideNode;
};