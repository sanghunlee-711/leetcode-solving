/**
 * @param {number} k
 * @param {number[]} nums
  * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */
var KthLargest = function(k, nums) {
    this.minHeap = new MinPriorityQueue();
    this.k = k;
    nums.forEach((num) => this.minHeap.enqueue(num))

    //k개 사이즈
    while(this.minHeap.size() > k) this.minHeap.dequeue();
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.enqueue(val);

    if(this.minHeap.size() > this.k) {
        this.minHeap.dequeue();
    }

    return this.minHeap.front();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */