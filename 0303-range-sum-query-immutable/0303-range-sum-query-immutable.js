/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.prefix = [];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        this.prefix.push(sum);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    const prefixLeft = left > 0 ? this.prefix[left-1] : 0;
    
    const prefixRight = this.prefix[right];
console.log(prefixLeft, prefixRight)
    return prefixRight - prefixLeft;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */