/**
 * @param {number[]} nums
 * @return {number}
 */
// T.C:O(N) + S.C:O(1)
/*
 a XOR 0 = a
 a XOR a = 0
 a XOR b XOR a = a XOR a XOR b = 0 XOR b = b
*/

var singleNumber = function(nums) {
    let answer = 0;
    
    for(const num of nums) {
        answer ^= num;
    }
        
    return answer;
};