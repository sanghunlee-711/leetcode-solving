/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return '';

    const map = new Map();

    //문자별 카운트 저장
    for(const char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let left = 0, right = 0;
    let count = 0;
    const windowMap = new Map();
    let minLen = Infinity;
    let minStr = "";

    while(right < s.length) {
        const curr = s[right];
        windowMap.set(curr, (windowMap.get(curr) || 0) + 1);


        if(map.has(curr) && windowMap.get(curr) === map.get(curr)) {
            count++;
        }
        // 현재 윈도우에 t 모든 문자 포함
        while(count === map.size) {
            //이전보다 짧은 구간이라면 값을 업데이트
            if(right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStr = s.slice(left, right + 1);
            }
            //왼쪽에서부터 윈도우 크기를 줄이므로 카운트 제거
            const leftChar = s[left];
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);
            //t를 모두 포함하지 않는 경우가 되므로 count제거 해야함.
            if(map.has(leftChar) && windowMap.get(leftChar) < map.get(leftChar)) {
                count--;
            }
            left++;
        }

        right++;
    }

    return minStr;
};