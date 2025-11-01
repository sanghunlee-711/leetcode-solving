/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const res = new Set();
    const set = new Set();

    nums.forEach((el) => {
        if(set.has(el)) res.add(el);
        set.add(el);
    })


    return Array.from(res)
};