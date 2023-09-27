/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

//strs[i] contains any possible characters out of 256 valid ASCII characters.

//ASCII코드가 아닌 것을 delimiter로 사용하면 해결 이 쉬움
//예를들어 파이(π)같은게 있음.

const delimiter = 'π'; 

var encode = function(strs) {
  return strs.join(delimiter);
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    return s.split(delimiter);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */