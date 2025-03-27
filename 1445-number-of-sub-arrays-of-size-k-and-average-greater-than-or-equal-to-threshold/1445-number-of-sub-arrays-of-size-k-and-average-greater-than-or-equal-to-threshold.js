/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let L = 0, R = 0,
        count = 0,
        currSum = 0;

    while(R < arr.length) {
        const [left, right] = [arr[L], arr[R]];
        
        currSum += right;

        if(R - L + 1 >= k) {
            const average = Math.floor(currSum / k);

            if(average >= threshold) count ++;
            currSum -= left;
            L++;
        }
        
        R++;
    }

    return count;
};