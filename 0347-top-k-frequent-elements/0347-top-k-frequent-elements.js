/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// k번째로 잦게 나타나는 원소까지만 반환
/*
 1. 해쉬 맵에 모두 기재 (원소: 몇번)
 2. 카운트(몇번) 별로 키를 정렬을 해야함
 3. k까지 정렬된 키의 순서를 slice해서 반환
*/

var topKFrequent = function(nums, k) {
    const map = new Map();
    
    nums.forEach((num)=> map.set(num, (map.get(num) || 0)+1))
    
    
    
    return [...map.entries()].sort(([keyA,countA],[keyB,countB])=> countB - countA ).map(([sortedKey, count])=> sortedKey).slice(0,k);
    
};