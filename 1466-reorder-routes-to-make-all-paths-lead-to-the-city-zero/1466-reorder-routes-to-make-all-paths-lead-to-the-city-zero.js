/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
//이건 어케해야할까
// 다 탐색한다음 0로 향하게 해야할 것 같은데 흠.. 백트래킹

// 0 -> fake (반대방향)
// 1 -> origin (원래방향)


//  순회 중에 "원래" 가장자리, 즉 1로 표시된 가장자리를 발견하면 개수가 1 증가합니다
// "인공적인" 가장자리를 발견하더라도 개수를 수정하지 않습니다
//  "인공" = 0 또는 "원본" = 1


var minReorder = function(n, connections) {
    const adj = {};
    const visited = {};
    let count = 0;
    
    //set origin as 1
    //fake as 0
    for( const [a,b] of connections) {
        if(!adj[a]) adj[a] = [];
        if(!adj[b]) adj[b] = [];
        
        adj[a].push([b,1]);
        adj[b].push([a,0]);
    }
    const dfs = function (position) {
        if(visited[position]) return;
        visited[position] = true;
        
        for(const connection of adj[position]) {
            console.log(connection)
            
            // 0 이라면 어차피 카운트 안올라가므로
            if(!visited[connection[0]]) count += connection[1];
            
            dfs(connection[0]);
        }
    }
    
    //start from root(0)
    dfs(0);
    
    return count;
};