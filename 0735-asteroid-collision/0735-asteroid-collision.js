/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

//충돌 되는 경우  --> <-- // 여기서 값이 같으면 사라짐 // 아니면 큰 것만 살아남음
//충돌 되지 않는 경우 <-- <-- || --> --> || <-- -->
var asteroidCollision = function(asteroids) {
  const stack = [];
    
    for(let i = 0; i < asteroids.length; i++) {
        const top = stack[stack.length - 1];
        const curr = asteroids[i];
        
        if(!stack.length) {
            stack.push(curr);
        } else if(top < 0) {
            stack.push(curr);
        } else if (curr > 0) {
            stack.push(curr);            
        } else if(top + curr === 0) { // 같을땐 날려야함
            stack.pop();
        } else if(Math.abs(curr) > Math.abs(top)) {
            stack.pop();
            i--;
        }
    }
    
    return stack;
};