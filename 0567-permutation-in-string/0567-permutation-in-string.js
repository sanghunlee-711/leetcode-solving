/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 window크기를 s1만큼 유지하면서 계속 체크 ㄱㄱ
 */
var checkInclusion = function(s1, s2) {
    const charMap = {};
    for(const char of s1) charMap[char] = (charMap[char] || 0) + 1;
    const required = Object.keys(charMap).length; // 필요한 문자 개수 
    const windowCount = {};
    let currCount = 0;

    let left = 0, right = 0;

    while(right < s2.length) {
        const rightChar = s2[right];

        if(charMap[rightChar] !== undefined) {
            windowCount[rightChar] = (windowCount[rightChar] || 0) + 1;

            if(windowCount[rightChar] === charMap[rightChar]) currCount++;
        }



        //left 올릴 떄
        if(right - left + 1 > s1.length) {
            const leftChar = s2[left];

            if(charMap[leftChar] !== undefined) {
                if(windowCount[leftChar] === charMap[leftChar]) currCount--;
                windowCount[leftChar] = (windowCount[leftChar] || 0) -1;
            }
            
            left++;
        }

        //매치될떄
        if(currCount === required) return true;

        right++;
    }

    return false;
};