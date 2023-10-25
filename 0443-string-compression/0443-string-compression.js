/**
 * @param {character[]} chars
 * @return {number}
 */
// 포인터 두개 두고.. while문을 돌리면 되긴할 것 같은데 chars자체를 수정해야하는게 난제임.. => 걍 마지막에 회문돌자..
// 다른 사람들의 풀이를 보니 정답 체크 자체가 특정 idx뒤로 chars값을 체크를 하지 않음..
var compress = function(chars) {
    let start = 0, 
        end = 0;
    
    while(end < chars.length) {
        let count = 0;
        let curr = chars[end];
        
        //변경되는지 확인
        while(chars[end] === curr) {
            end++;
            count++;
        }
        
        //오른 카운터 만큼 값 chars에 반영
        chars[start] = curr;
        start++;
        
        if(count > 1) {
            for(let num of count.toString()) {
                chars[start] = num;
                start++;
            }
        }
    }
    
    //start가 변경된 문자열의 길이
    return start;
};