/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//모두 정렬한다는 전제하에 twoSum함수
const twoSum = (nums, i, res) => {
    let start = i + 1, end = nums.length - 1;
    
    while(start < end) {
        const sum = nums[i] + nums[start] + nums[end];
        
        if(sum < 0) {
            start++;
        } else if (sum > 0) {
            end--;
        } else {
            const triplet = [nums[i], nums[start], nums[end]];
            
            res.push(triplet);
            
            start++;
            end--;
            //find nums[start] === nums[start-1] for avoiding duplicated case
            while(start < end && nums[start] === nums[start - 1]){
                start++;
            }
            
        }
    }
}

const threeSum = (nums) => {
    nums = nums.sort((a,b) => a-b);
    const answer = [];
    
    for(let i = 0; i < nums.length; i++) {
        
        //it's already ordered
        if(nums[i] > 0) continue;
        
        if(i === 0 || nums[i-1] !== nums[i]) {
            twoSum(nums, i ,answer);
        }
    }
    
    return answer;
};