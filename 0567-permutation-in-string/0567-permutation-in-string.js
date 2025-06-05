/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/*
Sliding Window

*/

var checkInclusion = function(s1, s2) {
    //edge case
    if (s1.length > s2.length) return false;

    const hash = {};
    
    //hash에 기록
    s1.split("").forEach((el) => hash[el] = (hash[el] || 0)+1);
    
    let left = 0, right = 0, count = s1.length;
    
    while(right < s2.length) {
        if(hash[s2[right]] > 0) count --;
        //해당 글자 카운트를 줄이고 오른쪽으로 윈도우 확장
        hash[s2[right]]--;
        right++;
        
        //만약 다 카운팅 된 거라면 true반환
        if(count === 0) return true;
        
        //윈도우크기가 카운트 해야할 s1과 동일 해졌다면 왼쪽에서 윈도우를 줄여야함
        if(right - left === s1.length){
            if(hash[s2[left]] >= 0) count++;
            //윈도우에서 해당 요소를 빼고 있으므로 줄였던 카운트를 늘려줘야함
            hash[s2[left]]++;
            left++;
        }
    }
    
    return false;
};