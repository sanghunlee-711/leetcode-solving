/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 T.C: O(k * 2^n)
 2^n: 각 숫자 포함 할지 말지에 대해 생기는 branching
 k: currSub 깊은 복사 시 
 */
const helper = (i, currSub, res, n, k) => {
    if(i > n + 1) return;
    if(currSub.length >= k) {
        res.push([...currSub])
        return;
    }
    currSub.push(i)
    helper(i+1, currSub, res, n, k);

    currSub.pop()
    helper(i+1, currSub, res, n, k);
}

var combine = function(n, k) {
    const res = [];
    helper(1, [], res, n, k)
    return res;
};