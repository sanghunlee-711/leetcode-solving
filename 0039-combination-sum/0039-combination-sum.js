/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];

    function dfs(i, curr, total) {
        //base
        if(total === target) {
            const currVal = [...curr];
            res.push(currVal);
            return;
        } 
        //over
        if(i >= candidates.length || total > target) return;

        //현재 원소를 넣고 decision 트리를 진행
        curr.push(candidates[i]);
        dfs(i, curr, total + candidates[i]);

        //현재 원소를 넣고 decision 트리를 진행하므로 total을 그대로
        curr.pop();
        dfs(i+1, curr, total);
    }

    dfs(0, [], 0);

    return res;
};