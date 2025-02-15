/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Bucket Sort: O(N)
 */
var sortColors = function(nums) {
    const counts = [0,0,0];
    //count every colors [2,2,2] -> idx: [0,1,2]
    nums.forEach((num) => counts[num] += 1);

    let j = 0;
    for(let i = 0; i < counts.length; i++) {
        let currCount = counts[i];
        while(currCount > 0) {
            nums[j] = i;
            j++;
            currCount--;
        }
    }

    return nums;
};