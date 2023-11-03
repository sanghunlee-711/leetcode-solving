/**
 * @param {number[]} gain
 * @return {number}
 */
//누적합 개념같은디.. 
// net gain[-5,1,5,0,-7] 
// altitue [0,-5,-4,1,1,-6]
// gain[i] = alt[i+1] - alt[i]; alt[0] = 0, 
// alt[i+1] = gain[i] + alt[i];
//위 식에서 alt배열에서 가장 큰값 찾으면 되는거네

var largestAltitude = function(gain) {
    let max = 0;
    let prevSum = 0;
    
    for(let i = 0; i < gain.length; i++) {
        prevSum  = prevSum + gain[i];
        
        max = Math.max(prevSum, max);
    }
    
    return max;
};