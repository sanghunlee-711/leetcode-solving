/**
 * @param {number[]} nums
 * @return {number[][]}
 //1. dfs brute force는 O(n^3)가능성이 있어 패스
 //2. 포인터 하나를 고정한뒤 투포인터로 진행
 */
var threeSum = function(nums) {
    const result = [];
    //투포인터 활용을 위한 정렬
    nums.sort((a,b) => a-b);

    for(let i = 0; i < nums.length - 2; i++) {
        //중복케이스 제거
        if(i > 0 && nums[i] === nums[i-1]) continue;

        let left = i+1,
            right = nums.length - 1;
        
        while(left < right) {
            const currSum = nums[i] + nums[left] + nums[right];

            if(currSum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                //중복 제거
                while(nums[left] === nums[left + 1]) left++;
                while(nums[right] === nums[right - 1]) right--;
                //이동
                left++;
                right--;
            } else if(currSum < 0) {
                left ++;
            } else {
                right --;
            }
        }
    }
    return result;
};