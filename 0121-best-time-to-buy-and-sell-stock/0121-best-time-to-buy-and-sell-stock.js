/**
 * @param {number[]} prices
 * @return {number}
 */
// 음.. 포인터 두개를 두자
// 뒤에 도일하거나 더 큰 값이 보이면 윈도우를 업데이트해서 다시 한번보자

var maxProfit = function(prices) {
    let start = 0,
        end = 1,
        max = 0;
     
    while(end < prices.length) {
        const isSlide = prices[end] <= prices[start];
        
        if(isSlide) start = end;
        
        const window = prices[end] - prices[start];
        
        max = Math.max(max, window);
        end++;
    }
    
    return max
};