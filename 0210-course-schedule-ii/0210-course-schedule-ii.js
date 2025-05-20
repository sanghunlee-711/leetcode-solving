/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adj = {};

    for(let i = 0; i < numCourses; i++) adj[i] = [];
    prerequisites.forEach(([to, from]) => adj[from].push(to))
    const visiting = new Set(),
        visited = new Set();

    function dfs(crs) {
        if(visiting.has(crs)) return false; // 사이클발생
        if(visited.has(crs)) return true; // 이미 방문된 노드

        visiting.add(crs);

        const nextCourses = adj[crs]
        for(const nextCourse of nextCourses) {
            if(!dfs(nextCourse)) return false;
        }

        visiting.delete(crs);
        visited.add(crs);

        return true;
    }

    for(let i = 0; i < numCourses; i++) if(!dfs(i)) return [];

    return Array.from(visited).reverse()
};