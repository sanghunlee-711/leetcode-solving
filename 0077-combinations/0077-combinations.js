/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 T.C: O(k * C(n, k))
 C(n, k): n개 중 k개 순서없이 고르기
 k: currSub 깊은 복사 시 
 */
const helper = (i, currSub, res, n, k) => {
    if(i > n + 1) return;
    if(currSub.length >= k) {
        res.push([...currSub])
        return;
    }

    for(let j = i; j < n + 1; j++) {
        currSub.push(j)
        helper(j+1, currSub, res, n, k);
        currSub.pop()
    }
}

var combine = function(n, k) {
    const res = [];
    helper(1, [], res, n, k)
    return res;
};