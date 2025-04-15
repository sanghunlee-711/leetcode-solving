/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];

    const dfs = (i, currSub) => {
        if(i >= nums.length) {
            return res.push([...currSub])
        }
        
        const curr = nums[i];

        currSub.push(curr)
        dfs(i+1, currSub);
        currSub.pop() //backtracking

        dfs(i+1, currSub);
    }

    dfs(0, []);

    return res;
};