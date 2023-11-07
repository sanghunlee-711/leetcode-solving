/**
 * @param {number[]} arr
 * @return {boolean}
 */
// map에 value의 카운트를 두고 value 만 돌려서 같은값이 있는지 판단해보자
var uniqueOccurrences = function(arr) {
    const map = new Map();
    arr.forEach((num) => map.set(num, (map.get(num) || 0) + 1));
    
    const origin = Array.from(map.values());
    const set = Array.from(new Set(origin));
    
    return origin.length === set.length;
};