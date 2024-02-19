/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* 정렬하지말래..
우선순위 큐 문제임을 알고있따..
우선순위큐를 어케 만들어볼까
큐에 넣을때 우선순위에따라 정렬을 해야한다.
자료구조 자체를 만들어야하는데 흠..
싱크다운 버블업을 구현해야하는 것인가
*/

class CustomMinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    //가장 작은값 반환
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
      return this.heap.length;
  }
    
  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
        
      //swap  
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    const isSwapLeft = leftChildIndex < this.heap.length 
                    && this.heap[leftChildIndex] < this.heap[smallestIndex];
    
      
    if (isSwapLeft) {
      smallestIndex = leftChildIndex;
    }

    const isSwapRight = rightChildIndex < this.heap.length 
                    && this.heap[rightChildIndex] < this.heap[smallestIndex];
      
    if (isSwapRight) {
      smallestIndex = rightChildIndex;
    }

    const isSwap = smallestIndex !== index;
      
    if (isSwap) {
      [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
      this.sinkDown(smallestIndex);
    }
  }
}



var findKthLargest = function(nums, k) {
    const minHeap = new CustomMinHeap();
    
    for(const num of nums) {
        minHeap.enqueue(num);
        
        if(minHeap.size() > k) {
            minHeap.dequeue();
        }
    }
    
    return minHeap.peek();
};