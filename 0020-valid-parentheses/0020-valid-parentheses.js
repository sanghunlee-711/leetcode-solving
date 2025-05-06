/**
 * @param {string} s
 * @return {boolean}
 // 스택에 시작 괄호들 넣고, 닫힘 괄호가 나오는 경우 매칭이 된다면 true 아님 false
 */
var isValid = function(s) {
    const obj = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(obj[char]) stack.push(char)
        else {
            const curr = stack.pop()
            if(obj[curr] !== char) return false;
        }
    }

    return stack.length === 0
};