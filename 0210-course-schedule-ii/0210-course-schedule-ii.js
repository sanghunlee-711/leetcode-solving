/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 209와 동일하나 방문하였던것과 방문중인것을 나눌 필요가 있다.
 */
var findOrder = function(numCourses, prerequisites) {
    const adj = {};
    for(let i = 0; i < numCourses; i++) adj[i] = [];
    prerequisites.forEach(([next, prev])=> adj[next].push(prev));
    const visiting = new Set(),
        visited = new Set();

    function dfs(crs) {
        if(visiting.has(crs)) return false;
        if(visited.has(crs)) return true;

        const preCourses = adj[crs];
        visiting.add(crs);
        for(const preCourse of preCourses) {
            if(!dfs(preCourse)) return false;
        }
        visiting.delete(crs);
        visited.add(crs);

        return true;
    }

    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i)) return [];
    }

    return Array.from(visited);
};