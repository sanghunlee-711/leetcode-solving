/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0,
        end = height.length - 1,
        max = -Infinity;
    
    while(start < end) {
        const x = end - start;
        const y = Math.min(height[end], height[start]);
        const area = x * y;
        max = Math.max(max, area);
        
        if(height[start] < height[end]) {
            start++;
        }else {
            end--;
        }
    }
    
    return max;
};