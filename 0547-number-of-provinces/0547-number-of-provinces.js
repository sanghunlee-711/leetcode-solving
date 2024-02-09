/**
 * @param {number[][]} isConnected
 * @return {number}
 */

function dfs (nodes, visited, i) {
    visited[i] = true;
    
    for(let j = 0; j < nodes.length; j++)  {
        if(nodes[i][j] === 1 && !visited[j]) {
            dfs(nodes, visited, j);
        }
    }
}

var findCircleNum = function(isConnected) {
    const visited = {};
    let count = 0;
    
    for(let i = 0; i < isConnected.length; i++) {
        if(!visited[i]) {
            count+=1;
            dfs(isConnected, visited, i);
        }
    }
    
    return count;
};