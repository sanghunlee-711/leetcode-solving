/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adj = {};
    for(let i = 0; i < numCourses; i++) adj[i] = [];
    prerequisites.forEach(([to, from]) => adj[from].push(to));
    const visiting = new Set(), //현재 dfs 단계에서 수강중인 강의
        visited = new Set(); // 싸이클 유무 체크도 넘어간 강의

    function dfs(crs) {
        if(visited.has(crs)) return true;
        if(visiting.has(crs)) return false;

        const nextCourses = adj[crs];
        visiting.add(crs);
        //싸이클 유무 판별을 위해 각 코스마다 돌리게 됨.
        for(const nextCourse of nextCourses) {
            if(!dfs(nextCourse)) return false;
        }

        visiting.delete(crs);
        visited.add(crs);

        return true;
    }

    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i)) return [];
    }
    
    return Array.from(visited).reverse();
};