/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 1) return 1;
    
    let start = 0, end = 0, max = 0;
    const map = new Map();
    
    while(end < s.length) {
        const endChar = s[end];
        
        // 카운트 더 해줌
        map.set(endChar, (map.get(endChar) || 0) +1);
        
        while(map.get(endChar) > 1) {
            const startChar = s[start];
            
            map.set(startChar, map.get(startChar) - 1);
            start++;
        }
        max = Math.max(end - start + 1, max);
        //회문 진행
        end++;
    }
    
    return max;
};