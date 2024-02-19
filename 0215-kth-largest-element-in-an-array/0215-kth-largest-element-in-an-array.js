/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class CustomMinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    
    enqueue(value) {
        this.heap.push(value);
        this.bubbleUp(this.size() - 1);
    }
    
    dequeue() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        
        return min;
    }
    
    bubbleUp(idx) {
        while(idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            
            const isSwap = this.heap[parentIdx] > this.heap[idx];
            if(!isSwap) break;
            
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }
    
    sinkDown(idx) {
        const leftChildIdx = idx * 2 + 1,
              rightChildIdx = idx * 2 + 2;
        let smallestIdx = idx;
        
        const isSwapLeft = leftChildIdx < this.size() 
                        && this.heap[leftChildIdx] < this.heap[smallestIdx];
        
        if(isSwapLeft) smallestIdx = leftChildIdx;

        const isSwapRight = rightChildIdx < this.size() 
                && this.heap[rightChildIdx] < this.heap[smallestIdx];
        
        if(isSwapRight) smallestIdx = rightChildIdx;
        
        const isSwapable = idx !== smallestIdx;
        
        if(isSwapable) {
            [this.heap[smallestIdx], this.heap[idx]] = [this.heap[idx], this.heap[smallestIdx]];
            this.sinkDown(smallestIdx);
        }
    }
}


var findKthLargest = function(nums, k) {
    const minHeap = new CustomMinHeap();
    
    for(const num of nums) {
        minHeap.enqueue(num);
        
        if(minHeap.size() > k) {
            minHeap.dequeue()
        }
    }
    
    return minHeap.peek();
};