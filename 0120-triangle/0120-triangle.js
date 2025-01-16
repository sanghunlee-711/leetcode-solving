/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function(triangle) {
    const map = new Map();

   const dfs = (x,y) => {
    const key = `${x}-${y}`;
    if(x >= triangle.length) return 0
    if(map.has(key)) return map.get(key);

    const res = triangle[x][y] + Math.min(dfs(x+1,y), dfs(x+1,y+1))
    map.set(key, res)
    return res;
   }

   return dfs(0,0) 
};