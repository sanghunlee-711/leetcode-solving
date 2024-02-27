/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
// BF -> X
// 최소Potion의 값은 약간의 수학을 생각하면 된다. success >= spell * 특정 potion값을 만족한다면 그 이후의 값은 모두 조건을 만족하게 됨(이미 정렬했으므로)
// 따라서 특정Potion(minPotion) = Math.ceil(success/spell)로 전제를 잡고 이진탐색을 통해 해당값을 찾는 노력을 하면 시간복잡도를 줄일 수 있음
const findIdx = (potions, minPotion) => {
    let start = 0, end = potions.length;
    
    while(start < end) {
        const mid = Math.floor((start + end) / 2);

        if(potions[mid] < minPotion) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    
    return start;
}

var successfulPairs = function(spells, potions, success) {
    potions = potions.sort((a,b) => a-b);
    
    const len = potions.length;
    const answers = Array.from({length: spells.length}, () => 0);
    const maxPotion = potions[len - 1]//정렬했으니까
    
    for(let i = 0; i < spells.length; i++) {
        const spell = spells[i];
        const minPotion = Math.ceil(success / spell);
        
        if(minPotion > maxPotion) {
            answers[i] = 0;
            continue;
        }
        
        const index = findIdx(potions, minPotion);
        
        answers[i] = len - index;
    }
    
    return answers;
};