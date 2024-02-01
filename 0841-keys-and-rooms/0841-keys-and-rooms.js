/**
 * @param {number[][]} rooms
 * @return {boolean}
 흠.. 그니께 각 배열에서 찾은 숫자를 가꼬 인덱스로 들어가
 1. 각 배열을 순회함
 2. 배열안에 배열이라 그래프임
 3. 또 그 그래프안에서 값을 찾아서 원본배열을 순회함
 4. 모든 배열이 순회되지 못하면 false임.
 
 
 sudo => dfs라고라..
 재귀로 모든 배열을 순회한다면?
 그리고 map을 통해 기록한다면?
 map values에서 false가 나오면 false를 반환해주면 될듯.
 그렇지 않으면 true 반환
 */
var canVisitAllRooms = function(rooms) {   
    const checkMap = new Map();
    rooms.forEach((_,idx) => checkMap.set(idx, false));
    checkMap.set(0,true);
    
    
    const checkRooms = function(room) {
    for(let i = 0; i < room.length; i++) {
        const roomNumber = room[i];
        
        if(checkMap.get(roomNumber) === false && roomNumber !== 0) {
                checkMap.set(roomNumber, true);
                checkRooms(rooms[roomNumber]);
            }
        }
        
        return null;
    }
    
    checkRooms(rooms[0]);
    
    const result = [...checkMap.values()].every(el=>el);
    return result;
};