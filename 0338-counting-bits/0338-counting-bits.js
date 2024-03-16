/**
 * @param {number} n
 * @return {number[]}
 */
//인데스 값을 2진수로 나타냈을 때 1의 개수네     
//이거 나누기 2 하고 몫 + 나머지하면 되는 거 아닌가
//짝수면 나누기 2의 몫
//홀수면 나누기 2의 몫 + 1하면 되겠는데
     
var countBits = function(n) {
    const answer = Array.from({length: n + 1},() => 0);
    
    answer[0] = 0;
    
    for(let idx = 0; idx <= n; idx++) {
        const quotient = Math.floor(idx / 2);
        const isEven = idx % 2 === 0;
        
        if(isEven) {
            answer[idx] = answer[quotient];
        }else {
            answer[idx] = answer[quotient] + 1;
        }
    }
    
    
    return answer;
};