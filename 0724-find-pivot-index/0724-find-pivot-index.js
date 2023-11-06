/**
 * @param {number[]} nums
 * @return {number}
 */
// 왼쪽에서 누적합 배열과 오른쪽에서 누적합배열에 동일한 인덱스가 있으면 해당 인덱스 반환해주면 됨.
var pivotIndex = function(nums) {
    let sumLeft = Array.from({length: nums.length},() => null);
    let sumRight = Array.from({length: nums.length},() => null);
    let prevSum = 0;
    
    for(let i = 0; i < nums.length; i++){
        sumLeft[i] = prevSum;
        prevSum += nums[i];
    }
    
    
    prevSum = 0;
    
    for(let i = nums.length - 1; i >= 0; i--){
        sumRight[i] = prevSum;
        prevSum += nums[i];
    }
    
    for(let i = 0; i < nums.length; i++){
        if(sumLeft[i] === sumRight[i]) return i;
        
    }
    
    return -1;
};