/**
 * @param {number[][]} grid
 * @return {number}
 */

//row에서 봤을때의 배열과 col에서 봤을때의 배열 값이 같으면 카운트를 올리는 거네 메모이징을 해야하나 ;-;
//col배열에 col값 따로 수집을하고
//map에 row값에 대한 것을 문자로 만들어놓고
// 동일한 값 들어오면 count올려주면 됨
var equalPairs = function(grid) {
    let count = 0;
    const map = new Map();
    
    for(let r = 0; r < grid.length; r++) {
        const row = grid[r].join(',');
        map.set(row, (map.get(row) || 0) + 1);
    }
    
    for(let c = 0; c < grid[0].length; c++){
        const col = grid.map((row)=> row[c]).join(",");
        
        count += (map.get(col) || 0);
    }
    
    return count; 
};