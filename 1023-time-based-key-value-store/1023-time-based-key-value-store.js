
var TimeMap = function() {
    this.list = new Map();

};

/** 
 * @description timestamp 별 탐색 후 반환을 위해 map내부에 배열로 값 저장
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.list.has(key)) this.list.set(key, []);
    this.list.get(key).push([timestamp, value]);
    
};

/** 
 * @description 이진탐색으로 값을 반환해주기 위함.
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
   const values = this.list.get(key) || [];

   let left = 0, right = values.length - 1;
   let result = '';

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const [midTimestamp, midValue] = values[mid];
        if(midTimestamp <= timestamp) {
            result = midValue;
            left = mid + 1;
        } else right = mid - 1;
    }

   return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */