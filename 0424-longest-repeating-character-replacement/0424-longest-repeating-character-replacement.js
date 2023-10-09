/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 같은문자열이 최대 몇번 연속으로 나올 수 있는 지
// map 통해서 카운팅을 한다치자..
// k번 바꿀수가 있다고 하니 흐으음.. 
//start와 end가 같으면 end계쏙 증가
//start가 end와 다르면 k 만큼 변경해보고 증가
// k가 다 소모되면 start를 변경했던지점으로 돌아가기 
var characterReplacement = function(s, k) {
    let start = 0, end = 0;
    let max = 0;
    const map = new Map();
    let answer = 0;
    
    while(end < s.length) {
        const currEnd = s[end];
        const currStart = s[start];
        
        map.set(currEnd, (map.get(currEnd) || 0) + 1);
        max = Math.max(max, map.get(currEnd));
        
        const isValid = end - start + 1 - max <= k;
        
        if(!isValid) {
            map.set(currStart, map.get(currStart) - 1);             start++;
        }
        
        answer = Math.max(end - start + 1);
        
        end++;
    }
    
    return answer;
};