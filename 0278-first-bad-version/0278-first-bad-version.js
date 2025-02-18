/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * L 과 R이 겹쳐끝이나는 지점이 true가 시작되는 지점이되도록 BinarySearch
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let L = 1, R = n;

        while(L <= R) {
            const mid = Math.floor((L + R) / 2);
            const res = isBadVersion(mid);

            if(res === false) {
                L = mid + 1;
            }else if(res === true) {
                R = mid - 1;
            }
        }

        return L
    };
};