/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
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
        if(this.size() === 1) return this.queue.pop();
        
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
            [this.queue[idx], this.queue[parentIdx]] = [this.queue[parentIdx], this.queue[idx]]
            idx = parentIdx
        }
    }
    
    sinkDown(idx) {
        const leftChildIdx = idx * 2 + 1;
        const rightChildIdx = idx * 2 + 2;
        let minIdx = idx;
        
        const isLeftSwap = minIdx < this.size()
                        && this.queue[minIdx] > this.queue[leftChildIdx];
        
        if (isLeftSwap) minIdx = leftChildIdx;
        
        const isRightSwap = minIdx < this.size()
                        && this.queue[minIdx] > this.queue[rightChildIdx];
        
        if (isRightSwap) minIdx = rightChildIdx;
        
        
        const isSwap = minIdx !== idx;
        
        if(isSwap) {
            [this.queue[idx], this.queue[minIdx]] = [this.queue[minIdx], this.queue[idx]]
            this.sinkDown(minIdx);
        }
    }
    
    
}

var maxScore = function(nums1, nums2, k) {
    //nums2기준으로 내림차순 정렬
    const len = nums1.length;
    const pairs = Array.from({length: len}, (_,idx)=> [nums1[idx], nums2[idx]]).sort((a,b)=> b[1] - a[1]);
    const minHeap = new CustomMinHeap();
    let topKSum = 0;
    
    //k-1 까지만 회문을 돌며 minHeap을 활용할 것임
    for(let i = 0; i < k; i++) {
        topKSum += pairs[i][0];            
        minHeap.enqueue(pairs[i][0]);
    }
    
    let answer = topKSum * pairs[k-1][1];
    
    // k부터 하나씩 minHeap으로 부터 가져오는 최소의 값을 빼가며 topKSum을 항상 최대상태로 유지
    for(let i = k; i < len; i++) {
        topKSum += pairs[i][0] - minHeap.dequeue();
        minHeap.enqueue(pairs[i][0])
        answer = Math.max(answer, topKSum * pairs[i][1])
    }
    
    return answer;
};