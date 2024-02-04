/**
 * @param {number[][]} isConnected
 * @return {number}
 */
//그러니까 연결된 것들끼리 그룹을 나누기 그룹의 개수를 리턴하라는 것 같은데
// 그룹화를 어케해야하나 ..
// 재귀로 넘어가서 확인화면 될 것 같긴한데.. 
// 카운트는 처음에 모든 노드가 독립적이라 하고 그룹된 것을 빼서 반환
// 동일한 노드는 재귀로 돌리 필요 없음
const dfs = (node, isConnected, visit) => {
    visit[node] = true;
    
    for(let i = 0; i < isConnected.length; i++) {
        if(isConnected[node][i] === 1 && visit[i] === false) {
            dfs(i, isConnected, visit);
        }
    }
}



var findCircleNum = function(isConnected) {
    let count = 0;
    const len = isConnected.length;
    const visit = Array.from({length: len}, () => false);
    
    for(let i = 0; i < len; i++) {
        if(visit[i] === false) {
            count += 1;
            dfs(i, isConnected, visit);
        }    
    }
    
    return count;
};