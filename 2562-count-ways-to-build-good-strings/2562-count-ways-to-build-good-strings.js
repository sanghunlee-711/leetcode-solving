/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @descriptions 
    dp[i] 는 길이가 i인 문자열을 만드는 '경우의 수'
    zero는 zero만큼 길이를 증가시키는 작업(one도 동일)
    if(i+zero <= high) dp[i+zero]
    if(i+one <= high) dp[i+one]
 * @return {number}
 */

var countGoodStrings = function(low, high, zero, one) {
    const MOD = 10 ** 9 + 7;
    const dp = Array.from({length: high + 1}, () => 0);
    dp[0] = 1; //길이 0은 빈 문자열 하나의 케이스 뿐

    for(let i = 0; i <= high; i++) {
        if(dp[i] > 0) {
            if(i+zero <= high) {
                //누적값 활용
                dp[i+zero] = (dp[i+zero] + dp[i]) % MOD;
            }

            if(i+one <= high) {
                dp[i+one] = (dp[i+one] + dp[i]) % MOD;
            }
        }
    }

    let result = 0;

    for(let i = low; i <= high; i++) {
        result = (result + dp[i]) % MOD;
    }

    return result;
};