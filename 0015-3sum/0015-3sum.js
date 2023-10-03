/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = new Set(),
          dups = new Set(),
          seen = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(dups.add(nums[i])){
            
            
            for(let j = i+1; j < nums.length; j++) {
                const complement = -1 * (nums[i] + nums[j]);
                
                if(seen.has(complement) && seen.get(complement) === i) {
                    const triplet = [nums[i], nums[j], complement].sort((a,b)=> a-b);
                    //Javascript set can't figure out array is dups in set
                    res.add(JSON.stringify(triplet));
                }
                seen.set(nums[j], i);
            }
        }
        
    }
    
    return [...res].map((re) => JSON.parse(re))
};