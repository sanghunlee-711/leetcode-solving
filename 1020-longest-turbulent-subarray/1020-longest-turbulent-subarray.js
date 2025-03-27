/**
 * @param {number[]} arr
 * @return {number}
 prev와 R을 계속비교 하면서 진행
 R은 계속 증가
 L은 turb이 깨지는 순간 변경
 */
var maxTurbulenceSize = function(arr) {
    let L = 0, R = 1, maxLen = 1;
    const len = arr.length;
    let flag = '' ; // right가 크면 right로 선언

    while(R < len) {
        const [prev, right] = [arr[R - 1], arr[R]];

        if(prev < right && flag !== 'right') {
            maxLen = Math.max(maxLen, R - L + 1);
            R++;
            flag = "right";
        }else if(prev > right && flag !== 'left'){
            maxLen = Math.max(maxLen, R - L + 1);
            R++;
            flag = "left";
        }else {
            if(prev === right) R = R + 1;
            L = R - 1;
            flag = '';
        }
    }

    return maxLen;
};