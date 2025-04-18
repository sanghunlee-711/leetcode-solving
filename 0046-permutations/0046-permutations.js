/**
 * @param {number[]} nums
 * @return {number[][]}
 중복 허용한 모든 경우의 수
 */
var permute = function(nums) {
    let perms = [[]];

    for(let num of nums) {
        let nextPerms = [];

        for(let p of perms) {
            for(let i = 0; i <= p.length; i++) {
                const copyP = [...p];
                copyP.splice(i, 0, num);
                nextPerms.push(copyP);
            }
            
        }
        perms = nextPerms;
    }

    return perms;
};