/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const needCount = {};
    for(const char of s1) needCount[char] = (needCount[char] || 0) + 1;

    const windowCount = {};
    let matchCount = 0;
    const target = Object.keys(needCount).length;

    let left = 0, right = 0;

    while(right < s2.length) {
        //윈도우 문자 추가 
        const inChar = s2[right];

        if(needCount[inChar] !== undefined) {
            windowCount[inChar] = (windowCount[inChar] || 0) + 1;

            if(windowCount[inChar] === needCount[inChar]) matchCount++;
        }

        //윈도우 크기 동일 시
        if(right - left + 1 > s1.length) {
            const outChar = s2[left];

            if(needCount[outChar] !== undefined) {
                if(windowCount[outChar] === needCount[outChar]) matchCount--;
                windowCount[outChar]--;
            }
            left++;
        }
        

        //permutation찾는 여부
        if(target === matchCount) return true;

        right++;//윈도우 확장
    }


    return false;
};