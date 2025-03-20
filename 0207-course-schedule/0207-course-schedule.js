/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 이거 양방향이면 걍 false인디 -> 방문한곳을 다시 방문하면
 */
var canFinish = function(numCourses, prerequisites) {
    const adjacencyList = new Map();
    //make adjacencyList
    for(let i = 0; i < numCourses; i++) {
        adjacencyList.set(i, []);
    }

    for(let [crs, dst] of prerequisites) {
        adjacencyList.get(crs).push(dst);
    }

    const visit = new Set();

    function dfs (crs) {
        if(visit.has(crs)) return false; // 싸이클임
        if(adjacencyList.has(crs).length === 0) return true; //더 방문할 곳이 없으므로 끝을 의미

        visit.add(crs);
        for(let pre of adjacencyList.get(crs)) {
            if(!dfs(pre)) return false;
        }
        //backtracking
        visit.delete(crs);

        //빈 배열로 만들면 prerequisite이 없다는 뜻으로 설정 (재방문 안하려고 그러는 것임)
        adjacencyList.set(crs, []);
        return true;
    }

    for(let c = 0; c < numCourses; c++) {
        if(!dfs(c)) return false;
    }

    return true
};