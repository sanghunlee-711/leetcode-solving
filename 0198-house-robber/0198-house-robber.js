/**
 * @param {number[]} nums
 * @return {number}
 //흠 1칸이상으로 띄워도 되는거라면..
 f(n) = Math.max(f(n+1) + nums[n], f(n+2));

 */

var rob = function(nums) {
    const map = new Map();
    const recur = (i) => {
        if(i >= nums.length) return 0;
        if(map.has(i)) return map.get(i);

        const val = Math.max(recur(i+1), nums[i] + recur(i+2));
        
        map.set(i, val);

        return val
    }
    return recur(0);
};