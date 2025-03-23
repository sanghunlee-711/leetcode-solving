/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 1. adjacency list를 만든다
 2. dfs (+ backtracking)을 통해 싸이클 여부를 판단한다
 3. 연결되지 않은 노드들의 판단을 위해 회문을 통해 다시 한번 dfs를 처리한다.
 */
var canFinish = function(numCourses, prerequisites) {
    //1. adjacencyList만들기
    const map = new Map();
    for(let i = 0; i < numCourses; i++) {
        map.set(i, []);
    }
    for(const [crs, pre] of prerequisites) {
        map.get(pre).push(crs);
    }

    console.log(map);
    
    const visiting = new Set(), // handle current visiting path
        visited = new Set(); // already visited path
    //backtracking
    function dfs(course) {
        if(visiting.has(course)) return false; //cycle detected => false
        if(visited.has(course)) return true; // already check done => true;

        visiting.add(course);

        for(const next of map.get(course)) {
            if(!dfs(next)) return false;
        }

        visiting.delete(course);
        visited.add(course);

        return true;
    }

    //check island or departed nodes
    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i)) return false;
    }

    return true;
};