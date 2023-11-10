/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// <-- <-- 충돌 x 
// --> <-- 충돌
// <-- --> 충돌 x
// --> --> 충톨 x
var asteroidCollision = function(asteroids) {
    const stack = [];
    
    for(let i = 0; i < asteroids.length; i++) {
        const curr = asteroids[i];
        const top = stack[stack.length - 1];
        
        if(!stack.length || curr > 0 || top < 0) {
            stack.push(curr);
        }else if(curr + top === 0) {
            stack.pop(); //둘다 안넣음
        }else if(Math.abs(curr) > Math.abs(top)) {
            stack.pop();
            i--;
        }
    }
    
    return stack;
};