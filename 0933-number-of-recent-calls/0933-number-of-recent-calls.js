
class RecentCounter {
    data = [];

    /** 
     * @param {number} t
     * @return {number}
     */
    ping = function(t) {
      this.data.push(t);
      let count = 0;
      
      this.data.forEach((p) => {
          if(p >= t - 3000 && p <= t) count+=1;
      })
        
      return count;
    };
}


/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */