
class RecentCounter {
    data = [];

    /** 
     * @param {number} t
     * @return {number}
     */
    ping = function(t) {
      this.data.push(t);

      while(this.data[0] < t - 3000) this.data.shift();
        
      return this.data.length;
    };
}


/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */