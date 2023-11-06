/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1),
          set2 = new Set(nums2);
    
    let arr1 =[],
          arr2 = [];
    
    for(let i = 0; i < nums2.length; i++) {
        if(!set1.has(nums2[i])) arr2.push(nums2[i]);
    }
    
    for(let i = 0; i < nums1.length; i++) {
        if(!set2.has(nums1[i])) arr1.push(nums1[i]);
    }
    arr1 = [...new Set(arr1)],
    arr2 = [...new Set(arr2)]
    return [arr1,arr2]
};