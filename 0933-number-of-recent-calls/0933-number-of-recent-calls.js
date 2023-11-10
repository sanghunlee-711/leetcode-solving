
class RecentCounter {
    data = [];

    /** 
     * @param {number} t
     * @return {number}
     */
    ping = function(t) {
      this.data.push(t);
      const res = [];
      
      this.data.forEach((p) => {
          if(p >= t - 3000 && p <= t) res.push(p);
      })
        
      return res.length;
    };
}


/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */