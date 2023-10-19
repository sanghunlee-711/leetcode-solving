/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
//start ,end가 가능한 스피드의 범주가 됨.
//이진 탐색을 통해 가능한 스피드의 범주를 계속 반으로 쪼개며 판단할 것 임
var minEatingSpeed = function(piles, h) {
    let start = 1, end = 1;
    
    piles.forEach((pile) => end = Math.max(end, pile))
    
    while(start < end) {
        const middleSpeed = Math.floor((start + end) / 2);
        let spendTime = 0;
        
        for(const pile of piles) {
            spendTime += Math.ceil(pile / middleSpeed);
        }
        
        if(spendTime <= h) end = middleSpeed;
        else start = middleSpeed + 1;
    }
    
    return start;
};