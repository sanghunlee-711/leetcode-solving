/**
 * @param {number[]} nums
 * @return {boolean}
 */

// B.F > triple iterate => work!

// O(N)???..

// 이때 해당인자보다 큰 값을 못잡으면 vs 잡으면 
// 잡았는데 못찾으면 ?? false지 뭐
// 첫번째 비교값이 계속 바뀌어야함. first 가 nums[i] 보다 크면 second가 되는데 그렇지 않으면 얘가 first가 되어야할 듯

var increasingTriplet = function(nums) {
    //edge
    if(nums.length < 3) return false;
    
    let first = Infinity,
        second = Infinity;
    
    for(let i = 0; i < nums.length; i++){
        if(second < nums[i]) return true;
        
        if(nums[i] > first) {
            second = nums[i];
        } else {
            first = nums[i];
        }
    }
    
   return false;
};