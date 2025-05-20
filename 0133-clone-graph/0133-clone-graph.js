/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 BF로 한다면 dfs든 bfs든 계속 카피하면서 neighbors에 추가하면 된다
 추가로 TLE방지를 위해 hashMap을 이용해 이미 카피한 노드의 값을 반환해주면 다시 만들지 않아도 됨
 */
var cloneGraph = function(node) {
    const map = new Map();

    function dfs(n) {
        if(!n) return null;
        if(map.has(n.val)) return map.get(n.val);

        const copy = new _Node(n.val);
        const originNeighbors = n.neighbors;
        map.set(n.val, copy);

        for(neighbor of originNeighbors) {
            const copiedNeighbor = dfs(neighbor)
            copy.neighbors.push(copiedNeighbor)
        }

        return copy;
    }

    return dfs(node)
};