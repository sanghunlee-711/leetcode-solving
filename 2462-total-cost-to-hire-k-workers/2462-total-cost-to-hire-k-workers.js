class CustomMinHeap {
    constructor() {
        this.heap = [];
    }
    
    peak() {
        return this.heap.length > 0 ? this.heap[0] : 0;
    }
    
    size() {
        return this.heap.length;
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.size() - 1);
    }
    
    remove() {
        if(this.size() === 0) return 0;
        if(this.size() === 1) return this.heap.pop();
        
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
        let minIdx = idx;
        
        const isSwapLeft = minIdx < this.size()
                        && this.heap[minIdx] > this.heap[leftChildIdx];
        
        if(isSwapLeft) minIdx = leftChildIdx;
        
        const isSwapRight = minIdx < this.size()
                        && this.heap[minIdx] > this.heap[rightChildIdx];
              
        if(isSwapRight) minIdx = rightChildIdx;
        
        const isPossibleToSwap = minIdx !== idx;
        
        if(isPossibleToSwap) {
            [this.heap[minIdx], this.heap[idx]] = [this.heap[idx], this.heap[minIdx]];
            this.sinkDown(minIdx);
        }
    }
}

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    const headMinHeap = new CustomMinHeap();
    const tailMinHeap = new CustomMinHeap();
    
    //앞에서 k명만큼 headMinHeap에 저장
    for(let i = 0; i < candidates; i++) {
        headMinHeap.insert(costs[i]);
    }
    
    const tailStartPoint = Math.max(candidates, costs.length - candidates);
    //앞에서 뒤의 k명만큼 tailMinHeap에 저장
    for(let j = tailStartPoint; j < costs.length; j++) {
        tailMinHeap.insert(costs[j]);
    }
    
    let answer = 0,
        nextHead = candidates,
        nextTail = costs.length - 1 - candidates;
    
    for(let i = 0; i < k; i++) {
        // 같은 비용인 경우 인덱스가 낮은 head쪽을 우선시 할것이기에 head부터 체크
        const isHeadPoll = tailMinHeap.size() === 0 || headMinHeap.size() !== 0
                            && headMinHeap.peak() <= tailMinHeap.peak()
        if(isHeadPoll) {
            answer += headMinHeap.remove();
            
            if(nextHead <= nextTail) {
                headMinHeap.insert(costs[nextHead]);
                nextHead++;
            }
        } 
        else {
            answer += tailMinHeap.remove();
            
            if(nextHead <= nextTail) {
                tailMinHeap.insert(costs[nextTail]);
                nextTail--;
            }
        }
    }
    
    
    return answer;
}; 