/**
 * @param {number[]} nums
 * @return {number[][]}
 T.C: O(n * n!) //배열 카피가 없으므로
 */
var permute = function(nums) {
    const res = [];

    function backtracking(start) {
        //nums를 직접 스왑하며 조작할 것이기에 다 다른 nums가 반환될 예정
        if(start === nums.length) return res.push([...nums]);

        for(let i = start; i < nums.length; i++) {
            [nums[i], nums[start]] = [nums[start], nums[i]] //임의로 i와 start를 변경해봄
            backtracking(start + 1);
            [nums[i], nums[start]] = [nums[start], nums[i]] // 원복
        }
    }

    backtracking(0)
    return res;
};