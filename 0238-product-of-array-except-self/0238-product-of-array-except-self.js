/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const length = nums.length;
    
    const left = Array.from({length}); //해당 인덱스 이전의 좌측 원소의 모든 곱의 값을 나타냄
    const right = Array.from({length}); // i인덱스 제외 오른쪽 모든 원소의 값의 곱을 나타냄
    const answer = Array.from({length}); //이러면 해당 인덱스에서는 L[i] * R[i]를 하게 되면 됨
    
    left[0] = 1, right[length - 1] = 1;
    
    for(let i = 1; i < length; i++){
        left[i] = left[i-1] * nums[i-1];
    }
    
    for(let i = length - 2; i >= 0; i--) {
        right[i] = right[i+1] * nums[i+1];
    }
    
    for(let i = 0; i < length; i++) {
        answer[i] = left[i] * right[i];
    }
    
    return answer;
};