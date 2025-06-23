/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 가능한 시간은 1 부터 piles 중 max임
 이진탐색으로 1부터 max까지의 값중 최적화된 값을 찾으면 아마도 답이 될 것.
 H보다 작으면 L를 K+1 반대면 R을 K-1로 가면 될 듯?..
 */
var minEatingSpeed = function(piles, h) {
    let left = 1,
        right = Math.max(...piles);
    let res = right;

    while(left <= right) {
        const mid = Math.floor((left+right) / 2);

        let total = 0;

        for(const pile of piles) {
            total += Math.ceil(pile / mid);
        }

        if(total <= h) {
            res = mid;
            right = mid - 1;
        } else left = mid + 1;
    }

    return res;
};