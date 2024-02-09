/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function dfs (nodes, i, visit) {
    visit[i] = true;
    
    for(let j = 0; j < nodes.length; j++) {
        //connected and not-visited
        if(nodes[i][j] === 1 && !visit[j]) {
            dfs(nodes, j, visit);
        }
    }
}


var findCircleNum = function(isConnected) {
  const len = isConnected.length;
  const visit = {};
    let count = 0;
    
    for(let i = 0; i < len; i++) {
        if(!visit[i]) {
            //when not visit => it may another group(provinces)
            count+=1;
            dfs(isConnected, i, visit);
        }
    }
    
    
    return count;
};