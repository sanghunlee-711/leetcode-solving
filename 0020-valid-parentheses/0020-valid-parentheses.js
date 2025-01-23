/**
 * @param {string} s
 * @return {boolean}
 */
 const map = {
    "(" : ")",
    "[" : "]",
    "{" : "}"
 }
 
var isValid = function(s) {
    const list = s.split("");
    const stack = [];
    console.log(list);
    for(let i = 0; i < list.length; i++) {
        const curr = list[i];
        if(curr === "(" || curr === "{" || curr === "[" ){
            stack.push(curr);
        } else {
            if(stack.length === 0) return false;
            const last = stack.pop();  
            if(map[last] !== curr) return false
        }
        
    }
    
    return stack.length == 0;
};