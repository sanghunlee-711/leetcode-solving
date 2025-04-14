class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue() //supported by leetcode
        this.maxHeap = new MaxPriorityQueue()
    }

    addNum(num) {
	//add to min and pop the top for max to keep them in the order that we want
        this.minHeap.enqueue(num);
        this.maxHeap.enqueue(this.minHeap.dequeue().element);
		//balance them
        if (this.minHeap.size() < this.maxHeap.size()) {
            this.minHeap.enqueue(this.maxHeap.dequeue().element);
        }
    }

    findMedian() {
        if (this.minHeap.size() > this.maxHeap.size()) 
            return this.minHeap.front().element;
        else 
            return (this.minHeap.front().element + this.maxHeap.front().element) / 2;
    }
}