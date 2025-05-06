
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let currMin = val;

    if(this.stack.length > 0) {
        const [top, minTop] = this.getAllTop();
        currMin = Math.min(minTop, val)
    }
        
    this.stack.push([val, currMin])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const [val, min] = this.stack.pop();
    return val;
};

MinStack.prototype.getAllTop = function() {
    const topVal = this.stack[this.stack.length - 1];
    return topVal
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const [topVal, _] = this.stack[this.stack.length - 1];
    return topVal
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const [_, min] = this.getAllTop();
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */