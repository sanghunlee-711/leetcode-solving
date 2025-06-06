/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 s의 문자열중 아무거나 k번바꿔서 같은 문자열이 최대 몇가지가 되는지 판별하는 문제
 가변 sliding window ?

 */
var characterReplacement = function(s, k) {
    let left = 0, right = 0;
    const counts = {};
    let temp = k;
    let windowMax = 0,
        max = 0;

    while(right < s.length) {
       const rightChar = s[right];
        counts[rightChar] = (counts[rightChar] || 0) + 1;
        windowMax = Math.max(windowMax, counts[rightChar]);

        //left상향
        while(right - left + 1 - windowMax > k) {
            const leftChar = s[left];
            counts[leftChar]--;
            left++;
        }

        max = Math.max(max, right - left + 1);
       right++;
    }

    return max;
};