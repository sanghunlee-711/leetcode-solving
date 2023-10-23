/**
 * @param {string} s
 * @return {string}
 */
// 투포인터
// start에서 만나면 멈춤, end에서 만날때까지..
// 그리고 두개 스왑 그리고 진행 start < end로 종결


var reverseVowels = function(s) {
    const set = new Set(['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']);
    
    let start = 0, end = s.length -1;
    let char = s.split("");
    
    while(start < end) {
        if(set.has(s[start])) {
            while(start < end) {
                if(set.has(s[end])) {
                    //swap
                    const endVal = s[end], startVal = s[start];
                    char[start] = endVal;
                    char[end] = startVal;
                    end--;
                    break;
                }
                end--;
            }
        }
        start ++;
    }
    
    return char.join('');
};