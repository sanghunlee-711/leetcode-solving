/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let left = 0, right = 1, max = 0;
    
    while(right < prices.length) {
        
        
        if(prices[right] <= prices[left]) {
            left = right;
        }
        
        const window = prices[right] - prices[left];
        max = Math.max(window, max);
        
        right++;
    }
    
    return max;
};