/**
 * @param {number[]} nums
 * @return {number}
 최소값은 결국 회전이 처음 시작되는 정상 nums의 index 0 의 부분
 left right가 겹치는 부분이 답이 된다.
 
 mid가 right보다 크면 왼쪽이 최소값이 있게 됨
 mid가 right보다 작으면 + 같으면 오른쪽이 최소값이 있게 됨
 */
var findMin = function(nums) {
    const len = nums.length;
    let left = 0, right = len - 1;

    while(left < right) {
        const mid = Math.floor((left+right) / 2);
        //우측이 꺾인 지점 존재
        if(nums[mid] > nums[right]) left= mid + 1;
        else right = mid;
    }

    return nums[left];
};