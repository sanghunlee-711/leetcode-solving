/**
 * @param {number[]} nums
 * @return {number[][]}
 T.C: O(2^N)
 S.C: O(N)
 */
var subsetsWithDup = function(nums) {
    const res = [];

    nums.sort((a,b) => a-b) // T.C: O(logN)
    
    const dfs = (i, currSub) => {
        if(i >= nums.length) {
            return res.push([...currSub])
        }
        const curr = nums[i];

        currSub.push(curr)
        dfs(i+1, currSub)

        currSub.pop() //backtracking

        //중복 건너뛰기 위해 index밀기
        while(i < nums.length && nums[i] === nums[i+1]) { i+=1 }
        dfs(i+1, currSub)
    }

    dfs(0, [])

    return res;
};