/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
/*
- pseudo

equations[i] = [Ai, Bi]
Ai / Bi = values[i]
values[i] = equations[0] / equations[1]; -> undefined일 일은 없음
queries[j] = [Cj, Dj]
 if(Cj / Dj = X)  return value;
 else return -1;
 
 equations를 통해 Ai, Bi의 값을 찾고
 그걸 넣은 Map을 만든다음
 그 값을 통해서 Queries값을 판별하면 될 것 같은데 ?...
 
 Do you recognize this as a graph problem? -> 어떻게 ????;;;
 equations를 edges, values를 간선이라 생각한다면 ? -> bc,cd인경우는 어케 처리하지
 
 각 변수 (a,b,c등..)을 node로 보고 나누기값을 edge로 바라보며 문제를 해결해보자
 ex)a/b = 2라면 a->b로 가는 간선의 값을 2 b->a로 가는 간선을 1/2로 보는 것이다.
 이렇게보면 queries가 요구하는 Cj/Dj의 값은 결국 a,c등의 각 변수(node)의 직접값 없이 해당하는 값의 간선의 존재여부를 통해 알 수 있게 될 수도 ?..
 
 
 그럼결국 백트래킹(w DFS)을 적용해서 해결할 수 있을 수도 있다.
 
 1. equations를 통해 그래프를 만들어내고
 2. 그래프를 만든 후 Query를 평가할 수 있게 된다.
 3. 만약 그래프에 노드가 존재하지 않으면 Query를 평가할 수 없게 되는데 이때는 없는값을 나타내는 값을 임의로 넣는다
 4. 만약 같은 노드를 평가하는 값(ex. a/a)이 나오면 1로 값을 넣어준다
*/

function backtrackEvaluate (graph, currNode, targetNode, accProduct, visited) {
     //mark visit
    visited.add(currNode);
    let ret = -1.0;
    
    const neighbors = graph[currNode];
    
    if(neighbors[targetNode] !== undefined) {
       ret = accProduct * neighbors[targetNode];
    } else {
        for(const [nextNode, value] of Object.entries(neighbors)) {
            if(visited.has(nextNode)) continue;
            const nextAccProduct  = accProduct * value;
            ret = backtrackEvaluate(graph, nextNode, targetNode, nextAccProduct , visited);
            
            if(ret !== -1.0) break;
        }
    }
    
    // unmark the visit, for the next backtracking
    visited.delete(currNode);
    
    return ret;
}

var calcEquation = function(equations, values, queries) {
    const graph = {};
    
    //make graph;
    for(let i = 0; i < equations.length; i ++) {
        const equation = equations[i];
        const dividend = equation[0], divisor = equation[1];
        const quotient = values[i];
        
        if(graph[dividend] === undefined) {
            graph[dividend] = {};
        }
        
        if(graph[divisor] === undefined) {
            graph[divisor] = {};
        }
        
        graph[dividend][divisor] = quotient;
        graph[divisor][dividend] = 1 / quotient;
    }
    
    // evaluating query with DFS(w backtracking)  
    const results = [];
    
    for(let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const dividend = query[0], divisor = query[1];
        
        if(graph[dividend] === undefined || graph[divisor] === undefined) {
            results[i] = -1.0;
        } else if(dividend === divisor) {
            results[i] = 1.0;
        } else {
            const visited = new Set();
            results[i] = backtrackEvaluate(graph, dividend, divisor, 1, visited);
        }   
    }
    
    return results;
};
