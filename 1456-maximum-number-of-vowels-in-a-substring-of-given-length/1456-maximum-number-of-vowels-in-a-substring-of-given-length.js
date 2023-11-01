/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 모음에 해당하는 set을 만들어놓고
// window를 늘리고 줄이면서 set에 값이 있으면 카운트를 넣어주고 그렇지 않다면 빼주자
var maxVowels = function(s, k) {
    const vowelSet = new Set(['a','e','i','o','u']);
    let subLen = 0;
    
    for(let i = 0; i < k; i++){
        const curr= s[i];
        if(vowelSet.has(curr)) {
            subLen+=1;
        }
    }
    
    let maxLen = subLen;
    
    for(let i = k; i < s.length; i++){
        const before = s[i - k];
        const after = s[i];
        
        if(vowelSet.has(before)) {
            subLen-=1;
        }
        
        if(vowelSet.has(after)) {
            subLen+=1;
        }
        
        maxLen = Math.max(maxLen, subLen);
    }
    
    return maxLen;
};