/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
/**
 * 1. bfs를 통해 도시 0 에서 시작해 모든 도시에 도달할 경로를 찾자
 * 2. 1을 통해 확인한 연결된 도로를 통해, 반대방향으로 연결된 도로를 재배치 할 도로로 간주하자.
*/
var minReorder = function(n, connections) {
    const graph = Array.from({length: n}, () => []),
          reverseGraph = Array.from({length: n}, () => []);
    
    for(const [u, v] of connections) {
        graph[u].push(v); // 원래 방향
        reverseGraph[v].push(u) // 반대 방향
    }
    
    const queue = [0], //0에서 부터 시작하는 큐
          visited = new Set([0]); // 방문한 도시 확인
    let reorderCount = 0;
    
    while(queue.length) {
        const curr = queue.shift();
        
        //현재 도시에서 나가는 방향의 도로
        for(const node of graph[curr]) {
            if(!visited.has(node)) {
                visited.add(node) // 방문 표시
                queue.push(node) // 큐에 추가
                reorderCount++;
            }
        }
        // 현재 도시로 들어오는 도로(반대방향)
        for(const node of reverseGraph[curr]) {
            if(!visited.has(node)) {
                visited.add(node) // 방문 표시
                queue.push(node);
                // 0으로 오는 방향이니 불필요
            }
        }
    }
    
    return reorderCount;
};