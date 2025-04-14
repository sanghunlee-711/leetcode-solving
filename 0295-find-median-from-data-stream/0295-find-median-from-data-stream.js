
var MedianFinder = function() {
    //큰쪽중 가장 작은값을 빨리 가져오기 위함
    this.large = new MinPriorityQueue() //가장 작은 value가 front에 있음 
    //작은쪽중 가장 큰 값을 빨리 가져오기 위함
    this.small = new MaxPriorityQueue() //가장 큰 value 가 front에 있음
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.large.isEmpty() || num > this.large.front()) {
        this.large.enqueue(num);
    } else {
        this.small.enqueue(num);
    }
    //사이즈 최대차이는 1이상 나지 않도록 밸런스 맞추기
    if (this.small.size() > this.large.size() + 1) {
        this.large.enqueue(this.small.dequeue());
    } else if (this.large.size() > this.small.size() + 1) {
        this.small.enqueue(this.large.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.small.size() > this.large.size()) {
        return this.small.front();
    } else if(this.large.size() > this.small.size()) {
        return this.large.front();
    }

    return (
        this.small.front() + 
        this.large.front()
    ) / 2.0;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */