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
//1. 리프꺼 모두 모아서 비교 ?

const isSame = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false;
    
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false;
    }
    
    return true;
}

const dfs = (node, arr) => {
        if(!node) return;
        if(!node.left && !node.right) arr.push(node.val);
        
        if(node.left) dfs(node.left, arr);
        if(node.right) dfs(node.right, arr);
}

const leafSimilar = function(root1, root2) {
    let leaf1 = [],
        leaf2 = [];
    
    dfs(root1, leaf1);
    dfs(root2, leaf2);
    console.log(leaf1, leaf2)
    return isSame(leaf1, leaf2)
};