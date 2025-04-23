/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


var canFinish = function(numCourses, prerequisites) {
    const adj = {}
    const visit = new Set();

    for(let i = 0; i < numCourses; i++) adj[i] = [];
    for(let [src, dst] of prerequisites) adj[src].push(dst)
    
    function dfs (crs) {
        //cycle
        if(visit.has(crs)) return false;
        //더 이상 사전 요구 과목 없음
        if(adj[crs].length === 0) return true;
        //방문 처리
        visit.add(crs);

        for(let pre of adj[crs]) {
            if(!dfs(pre)) return false;
        }
        //이미 체크 된 경우 빈 값 처리 해준다.
        visit.delete(crs);
        adj[crs] = [];
        return true;
    }

    for(let i = 0; i < numCourses; i++) if(!dfs(i)) return false;
    
    return true;
};