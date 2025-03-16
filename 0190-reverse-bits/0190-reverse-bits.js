/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0;

    for(let i = 0; i < 32; i++) {
        //n의 마지막 비트 확인
        //res에 shifting을 통해 공간확보
        // OR연산으로 비트 추가
        res = (res << 1) | (n & 1)
        n >>>= 1; //음수도 들어올 수 있어 unsinged shift
    }
    return res >>> 0;
};