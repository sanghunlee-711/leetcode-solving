/**
 * @param {number[]} nums
 * @return {number[][]}
dfs => backtracking
[1,2,3] => 
start                    []   
i = 0              [1]        []
i = 1       [1,2]        [1]        [2]       []
i = 2  [1,2,3] [1,2] [1,3] [1]  [2,3] [2]  [3]  [] 

 */
var subsets = function(nums) {
    const res = [];
    const subsets = [];

    function dfs(i) {
        if(i >= nums.length) {
            const currSubsets = [...subsets];
            return res.push(currSubsets);
        }
        
        //현재 인덱스의 요소를 추가하고 진행한 dfs
        subsets.push(nums[i]);
        dfs(i+1);
        //현재 인덱스의 요소를 추가하지 않고 진행한 dfs
        subsets.pop();
        dfs(i+1);
    }

    dfs(0);
    return res;
};