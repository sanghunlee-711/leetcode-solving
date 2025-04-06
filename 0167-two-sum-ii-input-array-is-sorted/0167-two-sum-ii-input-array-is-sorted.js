/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let L = 0, R = numbers.length - 1;

    while(L < R) {
        const [left, right] = [numbers[L], numbers[R]];
        const sum = numbers[L] + numbers[R];

        if(sum === target) return [L+1, R+1];

        if(sum < target) L++;
        else if(sum > target) R--;
        
     
    }
    return null;
};