/**
 * @param {string} s
 * @return {boolean}
 */
 const map = {
    "{" : "}",
    "[" : "]",
    "(" : ")"
 }
var isValid = function(s) {
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        const curr = s[i];

        if(curr === "{" || curr === "[" || curr === "(") {
            stack.push(curr);
        }else {
            if(stack.lenth === 0) return false;
            const last = stack.pop();
            if(map[last] !== curr) return false;
        }
        
    }
    return stack.length === 0;
};