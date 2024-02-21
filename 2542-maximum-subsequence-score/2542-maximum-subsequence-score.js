/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
/*
그니까 k만큼의 개수를 무작위로 골라서 nums1에서는 k개의 합 
nums2에서는 min 값을구하고 그 두가지 곱한 것 중 가장 큰값을 알려달라 인 건데 ㅣ..
nums2를 우선순위로 하는 기준으로 nums1을 정렬하면?? -> ???... 더하기는 어케할건데요
nums1 = [2,1], nums2 = [5,1], k = 1
nums1 = [3,1,4,1,2,1], nums2 = [10,9,7,6,5,1]
1. nums2기준으로 nums1을 정렬한다.
2. nums2에서 하나의 값이 정해졌다면 그것을 min값으로 가정한다.
2.1 그러면 nums1에서는 nums2에서 정해진 인덱스와 동일한 값을 제외하고 나머지 2가지중 가장 큰값을 찾으면 된다.
*/
class CustomMinHeap {
    constructor() {
        this.queue = [];
    }
    
    size() {
        return this.queue.length;
    }
    
    enqueue(value) {
        this.queue.push(value);
        this.bubbleUp(this.size() - 1);
    }
    
    dequeue() {
        if(this.size() === 0) return 0;
        if(this.size() === 1) {
            return this.queue.pop();
        }
        
        const min = this.queue[0];
        this.queue[0] = this.queue.pop();
        this.sinkDown(0);
        
        return min;
    }
    
    bubbleUp(idx) {
        
        
        while(idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const isSwap = this.queue[parentIdx] > this.queue[idx];
            
            if(!isSwap) break;
            //swap;
            [this.queue[idx], this.queue[parentIdx]] = [this.queue[parentIdx], this.queue[idx]]; 
            idx = parentIdx;
        }
    }
    
    sinkDown(idx) {
        const leftChildIdx = idx * 2 + 1,
              rightChildIdx = idx * 2 + 2;
        let minIdx = idx;
        
        const isLeftSwap = leftChildIdx < this.size()
                        && this.queue[minIdx] > this.queue[leftChildIdx];
        
        if(isLeftSwap) minIdx = leftChildIdx;
        
        const isRightSwap = rightChildIdx < this.size()
                && this.queue[minIdx] > this.queue[rightChildIdx];
        
        if(isRightSwap) minIdx = rightChildIdx;
        
        const isSwap = minIdx !== idx;
        
        if(isSwap) {
            [this.queue[minIdx], this.queue[idx]] = [this.queue[idx], this.queue[minIdx]];
            this.sinkDown(minIdx);
        }
    }
}

var maxScore = function(nums1, nums2, k) {
        const pairs = Array.from({length: nums1.length}, (_, idx) => [nums1[idx], nums2[idx]]).sort((a,b)=> b[1] - a[1]);
        const topKHeap = new CustomMinHeap();
        let topKSum = 0;
        
        for(let i = 0; i < k; i++) {
            topKSum += pairs[i][0];
            topKHeap.enqueue(pairs[i][0]);
        }
    
        let answer = topKSum * pairs[k-1][1];
        
    
        for(let i = k; i < nums1.length; i++) {
            topKSum += pairs[i][0] - topKHeap.dequeue();
            topKHeap.enqueue(pairs[i][0]);
            answer = Math.max(answer, topKSum * pairs[i][1]);
        }
    
        return answer
};