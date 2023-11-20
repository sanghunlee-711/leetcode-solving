/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if(char !== ']') {
            stack.push(char);
            continue;
        }
        
        let curr = stack.pop();
        let str = '';
        
        while(curr !== '[') {
            str = curr + str;
            curr = stack.pop();
        }
        
        let num = '';
        curr = stack.pop();
        
        while(!Number.isNaN(Number(curr))) {
            num = curr + num;
            curr = stack.pop();
        }
        
        stack.push(curr);
        stack.push(str.repeat(Number(num)));
        
    }
    
    return stack.join('')
};