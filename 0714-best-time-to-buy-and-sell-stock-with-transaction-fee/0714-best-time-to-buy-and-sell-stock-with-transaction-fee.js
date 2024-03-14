/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
//전 케이스에서 사는 것(stock가짐) 또는 파는것(stock팜 또는 사지 않음)에 따라 다음 (현재)케이스의 계산방법이 달라짐
//두가지 케이스를 끝까지 가지고 가서 마지막에 stock을 가지지 않는 케이스를 반환

var maxProfit = function(prices, fee) {
    let len = prices.length;
    const free= Array.from({length: len}),
          hold = Array.from({length: len});
    
    //처음에 하나를 가지고 있다고 가정을 하기에
    hold[0] = -prices[0];
    free[0] = 0;
    
    for(let i = 1; i < len; i++) {
        //전날에도 가지고 있었던 경우 or 전날에 구매한 경우
        hold[i] = Math.max(hold[i-1], free[i-1] - prices[i]);
        free[i] = Math.max(free[i-1], hold[i-1] + prices[i] - fee);
    }
    
    return free[len-1];
};