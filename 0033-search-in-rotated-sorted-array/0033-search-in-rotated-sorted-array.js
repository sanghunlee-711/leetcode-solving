/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 target의 index를 nums에서 찾는데 
 rotation된 nums가 들어오고,
 있다면 Rotation된 nums에서 target의 인덱스를
 없다면 -1을
 근데 T.C: O(LogN)
Pseudo : 왼쪽 또는 오른쪽 정렬을 분기하고 
정렬된 쪽에서 이진탐색을 계속하면?
 */
var search = function(nums, target) {
    const len = nums.length;
    let left= 0, right = len - 1;

    while(left <= right) {
        const mid = Math.floor((left+right) / 2);

        if(nums[mid] === target) return mid;

        //왼쪽이 정렬되었다 판단
        if(nums[left] <= nums[mid]) {
            //타겟이 왼쪽 정렬 안 케이스에 있는경우
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else left = mid + 1;
        } else {
        //오른쪽이 정렬되었다 판단
            if(nums[mid] < target && target <= nums[right]) {
            //타겟이 오른쪽 정렬 안 케이스에 있는경우
                left = mid + 1;
            } else right = mid - 1;
        }
    }

    return -1;
};