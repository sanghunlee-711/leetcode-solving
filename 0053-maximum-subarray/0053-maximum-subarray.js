/**
 * @param {number[]} nums
 * @return {number}
 //kadane's algorithm
 */
var maxSubArray = function(nums) {
    let L = 0, R = 0;
    let currSum = 0,
        maxSum = nums[0];

    while(R < nums.length) {
        //초기화 후 이동
        if(currSum < 0) {
            currSum = 0;
            L = R;
        }

        currSum += nums[R];

        if(currSum > maxSum) {
            maxSum = currSum;
        }
        R++;
    }

    return maxSum
};