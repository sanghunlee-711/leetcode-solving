/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    let  totalTank = 0, //전체 순환 가능여부 판단 총 netGain의 합
        currTank = 0, //각 스텝별 다음 스텝 가능여부 판단
        startIdx = 0;

    for(let i = 0; i < n; i++) {
        const netGain = gas[i] - cost[i];
        totalTank += netGain,
        currTank += netGain;

        if(currTank < 0) {
            startIdx = i + 1;
            currTank = 0;
        }
    }

    return totalTank >= 0 ? startIdx : -1;
};