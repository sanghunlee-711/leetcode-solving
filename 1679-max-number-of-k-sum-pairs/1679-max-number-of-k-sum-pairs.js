/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// BF -> 회문 중첩으로 돌리면 간단하게 해결?
// var maxOperations = function(nums, k) {
//     let count = 0;
    
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i] === null || nums[j] === null) continue;
//             const sum = nums[i] + nums[j];
            
//             if(sum === k) {
//                 nums[i] = null;
//                 nums[j] = null;
//                 count++;
//             }
//         }
//     }
//     return count;
// };

//6 | 1 null 3 null 4
// 위 BF를 정렬후 투포인터를 활용한다면?
var maxOperations = function(nums, k) {
    let count = 0;
    nums = nums.sort((a,b) => a-b);
    let start = 0, end = nums.length - 1;
    
    while(start < end) {
        if(nums[start] + nums[end] === k) {    
            count++;
            start++;
            end--;
        } else if(nums[start] + nums[end] > k){
            end--;
        } else if(nums[start] + nums[end] < k) {
            start++;
        }
    }
    
    return count;
};


