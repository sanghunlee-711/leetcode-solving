/**
 * @param {number[]} nums
 * @return {number}
 //set 에 추가하면서 +1이 있는 경우가지 계속 돌림?

 */
var longestConsecutive = function(nums) {
  let max = 0;
  const set = new Set(nums);

    for(const num of set) {
        const isStart = !set.has(num - 1)
        if(isStart) {
            let curr = num;
            let currCount = 1;

            while(set.has(curr+1)) {
                curr+=1;
                currCount +=1;
            }

            max = Math.max(max, currCount);
        }
    }
    

  return max;
};