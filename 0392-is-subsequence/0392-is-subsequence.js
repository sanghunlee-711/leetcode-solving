/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let ps = 0, pt = 0;
    
    while(ps < s.length && pt < t.length) {
        
        if(s[ps] === t[pt]) {
            console.log('??', ps, pt)
            ps++;
        }
        pt++;
    }
           
    return ps === s.length;
};