/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 싸이클이 생기면 안되는 전형적인 Topolical sort
 1. adjs List (hash)로 과목별 선수과목을 기재
 2. 각 과목을 방문처리하며 재 방문 되는 경우 false로 처리
 */
var canFinish = function(numCourses, prerequisites) {
    //1
    const adj = {};
    const visited = new Set();
    for(let i = 0; i < numCourses; i++) adj[i] = [];
    prerequisites.forEach(([course, dst]) => {
        adj[course].push(dst)
    })

    //2
    function dfs(course) {
        //cycle이 되는 경우
        if(visited.has(course)) return false;
        //이미 수강을 완료한 케이스
        if(adj[course].length === 0) return true;
        visited.add(course)

        const pre = adj[course];
        for(const preCourse of pre) {
            if(!dfs(preCourse)) return false;
        }
        //dfs를 통해서도 싸이클이 없다 판단했기에 수강 완료
        adj[course] = []
        //백트래킹
        visited.delete(course)

        return true;

    }

    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i)) return false;
    }

    return true;
};