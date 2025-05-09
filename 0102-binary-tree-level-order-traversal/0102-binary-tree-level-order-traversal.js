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
 queue에 레벨별로 넣고, 각 회차마다 res에 값을 넣어줌
 처음에 값이 없는 경우도 고려필요
 T.C: O(N) //모든 노드 탐색
 S.C: O(H) res 트리의 높이 ?..
 */
var levelOrder = function(root) {
    if (!root) return [];

    const queue = [root];
    const res = [];
    let currIdx = 0;
    while(queue.length > 0) {
        const len = queue.length;

        for(let i = 0; i < len; i++) {
            const curr = queue.shift()
            if(res[currIdx]) res[currIdx].push(curr.val);
            else res[currIdx] = [curr.val];

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        
        currIdx += 1;
    }

    return res;
};