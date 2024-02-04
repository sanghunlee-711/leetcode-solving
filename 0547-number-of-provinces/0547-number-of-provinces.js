/**
 * @param {number[][]} isConnected
 * @return {number}
 */
//check every node is visited for knowing province(that newly visitied);

const dfs = (isConnected, i, visit) => {
    visit[i] = true;
    
    for(let j = 0; j < isConnected.length; j++){
        if(isConnected[i][j] === 1 && visit[j] === false) {
            dfs(isConnected, j, visit);
        }
    }
    
}

var findCircleNum = function(isConnected) {
    const len = isConnected.length,
          visit = Array.from({length:len},()=>false); //initialize all the visit state is false;
    let res = 0;
    
    for(let i = 0; i < len; i++) {
        if(!visit[i]){
            //count up if not visited case find
            res+=1;
            dfs(isConnected, i, visit)
        }
    }
    
    return res;
};