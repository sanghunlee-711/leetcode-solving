/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
//이게 말이 Swap이지 사실상 알파벳의 종류와 개수의 배열이 모두 같으면 되는 것 같음.
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;
    
    const map1 = new Map();
    const map2 = new Map();
    
    for(let i = 0; i < word1.length; i++) {
        const curr1 = word1[i];
        const curr2 = word2[i];    
        
        map1.set(curr1, (map1.get(curr1) || 0) + 1);
        map2.set(curr2, (map2.get(curr2) || 0) + 1);
    }
    
    const keySet = new Set(map1.keys());
    const values1 = Array.from(map1.values()).sort((a,b)=>a-b);
    const values2 = Array.from(map2.values()).sort((a,b)=>a-b);
    
    for(let [key, value] of map2) {
        if(!keySet.has(key)) return false;
    }
    
    for(let i = 0; i < values1.length; i++) {
        if(values1[i] !== values2[i]) return false;  
    }
    
    
    return true;
};