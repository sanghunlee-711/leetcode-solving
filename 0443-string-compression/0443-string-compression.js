/**
 * @param {character[]} chars
 * @return {number}
 */
// 포인터 두개 두고.. while문을 돌리면 되긴할 것 같은데 chars자체를 수정해야하는게 난제임.. => 걍 마지막에 회문돌자..
// ["a","b"] 인 경우 카운터가 애매해지네 ..
var compress = function(chars) {
    let start = 0, 
        end = 0, 
        s = '', 
        checker = '';
    
    while(end < chars.length) {
        checker = chars[start];
        
        if(checker !== chars[end]) {
            const count = end - start;
        
            if(count > 1) {
                s += checker + count;                     
            } else {
                s += checker;
            }
            
            //update checker and position
            start = end;
            checker = chars[end];
            end = start + 1;
        } else {
            end++;        
        }
    }
    
    //마지막 문자열 업데이트
   const count = end - start;
        
    if(count > 1) {
        s += checker + count;                     
    } else {
        s += checker;
    }

    //실제 문자열 업데이트
    for(let i = 0; i < chars.length; i++) {
        if(s[i]) chars[i] = s[i];
        else chars[i] = '';
    }
    
    return s.length;
};