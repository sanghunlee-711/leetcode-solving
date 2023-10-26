/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//회문하다가 0을 만나면 swap하면 될 것 같다. ->swpa으로는 안되고 젤 뒤로 밀어야하네.
//0이 아닌걸 미리 넣어놓고 0만 마지막에 넣자 -> swap이 아니라 값을 그냥 넣는거지
var moveZeroes = function(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
       const curr = nums[i];
       
       if(curr !== 0) {
           nums[count] = curr;
           count++;
       }
   }
        
    
    while(count < nums.length) {
        nums[count] = 0;
        count++;
    }
    
    return nums;
};