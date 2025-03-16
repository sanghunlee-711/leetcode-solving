/**
 * @param {number} n
 * @return {number[]}
 //n개 길이까지 회문을 돌릴건데, 10진수에 해당하는 인덱스 별로 1의 개수를 각 인덱스에 담아 배열로 반환해라.
 */
function checkBit(n) {
    let count = 0;
    while(n > 0) {
        if(n & 1 === 1) {
            count += 1;
        }
        n = n >> 1;
    }
    return count;
}

var countBits = function(n) {
    const ans = Array.from({length: n}, () => 0);

    for(let i = 0; i <= n; i++) {
        ans[i] = checkBit(i);
    }

    return ans;
};