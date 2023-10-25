/**
 * @param {character[]} chars
 * @return {number}
 */
// 포인터 두개 두고.. while문을 돌리면 되긴할 것 같은데 chars자체를 수정해야하는게 난제임.. => 걍 마지막에 회문돌자..
// ["a","b"] 인 경우 카운터가 애매해지네 ..
var compress = function(chars) {
    let start = 0, 
        end = 0;
    
    while(end < chars.length) {
        let count = 0;
        let curr = chars[end];
        
        while(chars[end] === curr) {
            end++;
            count++;
        }
        
        chars[start] = curr;
        start++;
        
        if(count > 1) {
            for(let num of count.toString()) {
                chars[start] = num;
                start++;
            }
        }
    }
    
    
    return start;
};