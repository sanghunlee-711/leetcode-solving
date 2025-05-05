/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const n = numbers.length;
    let p1 = 0,
        p2 = n-1;

    while(p1 < p2) {
        if(numbers[p1]+numbers[p2] === target) return [p1+1, p2+1];
        else if(numbers[p1]+numbers[p2] < target) {
            p1++;
        }else {
            p2--;
        }    
    }

    return [-1,-1]
};