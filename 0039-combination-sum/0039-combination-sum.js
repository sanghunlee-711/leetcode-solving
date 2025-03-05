/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];


    function dfs (i, subset, sum) {
        

        //base
        if(i >= candidates.length || sum > target) return;

        if(sum === target) {
            const currVal = [...subset];
            return res.push(currVal);
        }

        //현재를 포함한 트리 노드
        subset.push(candidates[i]);
        dfs(i, subset, sum + candidates[i]);
        //현재를 포함하지 않은 트리 노드

        subset.pop();
        dfs(i+1, subset, sum);
    }

    dfs(0, [], 0);

    return res;
};