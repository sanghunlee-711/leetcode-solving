/**
 * @param {number[]} nums
 * @return {number[][]}
 subset을 만들기위한 복잡도는 element를 넣거나 안넣거나로 2^n이 나옴
 n개의 엘리먼트 모두 탐색을 하기에 
 T.C: O(n*2^n)
 S.C: O(2^n) 조합의 수가 할당되므로
 pseudo: backtracking을 진행
 넣거나
 넣지 않거나로 재귀 실행
 넣지 않으면 해당 element는 절대 넣지 않을 것이므로 While문으로 밀어주자.
 */

function dfs(i, nums,sub, res) {
    if(i >= nums.length) return res.push([...sub])
    //해당 엘리먼트가 들어가는 subset인 경우
    sub.push(nums[i]);
    dfs(i + 1, nums, sub, res)
    //해당 엘리먼트가 들어가지 않는 subset인 경우
    //위에 들어간 엘리먼트를 다시 넣으면 안되므로 nums[i]와 중복되지 않게 밀어야함.
    let j = i;
    while(nums[j] === nums[j+1] && j < nums.length) j+=1;
    sub.pop();
    dfs(j + 1, nums, sub, res)
}

var subsetsWithDup = function(nums) {
    //중복제거 편하게 하기 위함.
    nums.sort((a,b) => a-b);
    const res = [];
    dfs(0, nums, [], res);

    return res;
};