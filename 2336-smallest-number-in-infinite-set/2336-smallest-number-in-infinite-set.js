class CustomMinHeapQ {
    constructor() {
        this.queue = [];
    }
    
    /**
    * @return {void}
    */
    size() {
        return this.queue.length;
    }
    
    /** 
     * @param {number} num
     * @return {void}
     */
    enqueue(num) {
        //if exist don't put in the queue;
        this.queue.push(num);
        this.bubbleUp(this.size() - 1);
    }
    
    /**
     * @return {number}
     */
    dequeue() {
        if(this.size() === 0) return null;
        if(this.size() === 1) {
            const smallest = this.queue.pop();
            return smallest;
        }
        
        const smallest = this.queue[0];
        this.queue[0] = this.queue.pop();
        this.sinkDown(0);
        
        return smallest;
    }
    
    /**
    * @params {number} idx
    */
    bubbleUp(idx) {
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            const isSwap = parentIdx < this.size()
                        && this.queue[idx] < this.queue[parentIdx];
            if(!isSwap) break;
            
            [this.queue[idx], this.queue[parentIdx]] = [this.queue[parentIdx], this.queue[idx]];
            idx = parentIdx;   
        }

    }
    
    /**
    * @params {number} idx
    */
    sinkDown(idx) {
        const leftChildIdx = idx * 2 + 1,
              rightChildIdx = idx * 2 + 2;
        let smallestIdx = idx;
        
        const isLeftSwap = leftChildIdx < this.size()
                        && this.queue[leftChildIdx] < this.queue[smallestIdx];
        
        if(isLeftSwap) smallestIdx = leftChildIdx;
        
        const isRightSwap = rightChildIdx < this.size()
                        && this.queue[rightChildIdx] < this.queue[smallestIdx];
        
        if(isRightSwap) smallestIdx = rightChildIdx;
        
        const isSwaped = smallestIdx !== idx;
        
        if(isSwaped) {
            [this.queue[idx], this.queue[smallestIdx]] = [this.queue[smallestIdx], this.queue[idx]];
            this.sinkDown(smallestIdx);
        }
    }
}

class SmallestInfiniteSet {
    constructor() {
        this.set = new Set();
        this.minHeapQ = new CustomMinHeapQ();
        this.highestVal = 1;
    }
    
    /**
     * @return {number}
     */
    popSmallest () {
        let answer = 0;
        const isEmpty = this.minHeapQ.size() === 0;
        
        if(!isEmpty) {
            answer = this.minHeapQ.dequeue();
            this.set.delete(answer);
            return answer;
        }
        
        answer = this.highestVal;
        this.highestVal = this.highestVal + 1;
        return answer;
    }
    
    /**
     * @param {number} num
     * @return {void}
     */
    addBack(num) {
        const isExsit = this.highestVal <= num || this.set.has(num);
        
        if(isExsit) return;
        
        this.minHeapQ.enqueue(num);
        this.set.add(num);
    }
}


/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */