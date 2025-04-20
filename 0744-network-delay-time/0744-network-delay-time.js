/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adj = {};

    // 인접노드 가중치를 쉽게 가져오기 위해 adjacency list 세팅
    // u가 시작, v가 타겟, w가 가중치
    for(const[u, v, w] of times) {
        if(!adj[u]) adj[u] = [];
        adj[u].push([v, w])
        if(!adj[v]) adj[v] = [];
    }

    const minHeap = new MinPriorityQueue(e => e[0]);
    minHeap.enqueue([0, k]);

    //노드 k에서 출발해서, 모든 노드로 도달하는 데 걸리는 최대 시간
    const visit = new Set();
    let totalTime = 0;
    while(!minHeap.isEmpty()) {
        const [w1, n1] = minHeap.dequeue();

        if(visit.has(n1)) continue; //이미 기재된 경로는 넘어감
        visit.add(n1);
        totalTime = w1; //가장 마지막에 변경된 값이 가장 먼노드까지의 가중 거리가 될 것 이므로 계속 변경

        for(const [n2, w2] of adj[n1]) {
            if(!visit.has(n2)) minHeap.enqueue([w1 + w2 , n2]);
        }
    }

    return visit.size === n ? totalTime : -1;
};