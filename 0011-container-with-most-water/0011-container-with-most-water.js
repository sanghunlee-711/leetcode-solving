/**
 * @param {number[]} height
 * @return {number}
 */

// 두번 돌리면 쉬울텐데 .. -> TLE
// 정렬은 불가하고
// 투포인터로 하려면 조건이 필요한데 .. target이 없음
// 더 짧은 vertical의 포인터를 이동한다면 y-axis가 줄어들더라도 전체 너비가 상승할 수 있는 여지가 있기에 이동시키는 것이 유리함.

var maxArea = function(height) {
    let answer = 0,
        start = 0,
        end = height.length - 1;
    
    while(start < end) {
        const vertical = Math.min(height[start], height[end]);
        const square = (end - start) * (vertical);
        
              answer = Math.max(answer, square);
        
        if(height[start] <= height[end]) {
            start++;
        } else {
            end--
        }
    }
    
    return answer;
};