//Segment Tree개념을 활용하여 rangeQuery를 O(log N)으로 시행
class SegmentTreeNode {
    constructor(L, R){
        this.L = L;
        this.R = R;
        this.sum = 0;
        this.left = null;
        this.right = null;
    }
}

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.root = this.build(nums, 0, nums.length - 1);
};

/** 
 * @param {number} nums 
 * @param {number} L
 * @param {number} R
 * @return {void}
 */
NumArray.prototype.build = function(nums, L, R) {
    const node = new SegmentTreeNode(L, R);

    if (L === R) {
        node.sum = nums[L];
        return node;
    }

    const M = Math.floor((L + R) / 2);
    node.left = this.build(nums, L, M);
    node.right = this.build(nums, M + 1, R);
    node.sum = node.left.sum + node.right.sum;

    return node;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val, node = this.root) {
    if (node.L === node.R) {
        node.sum = val;
        return;
    }

    const M = Math.floor((node.L + node.R) / 2);
    if (index <= M) {
        this.update(index, val, node.left);
    } else {
        this.update(index, val, node.right);
    }

    node.sum = node.left.sum + node.right.sum;
};

/** 
 * @param {number} L 
 * @param {number} R
 * @return {number}
 */
NumArray.prototype.sumRange = function(L, R, node = this.root) {
    if (node.L === L && node.R === R) return node.sum;

    const M = Math.floor((node.L + node.R) / 2);

    if (R <= M) {
        return this.sumRange(L, R, node.left);
    } else if (L > M) {
        return this.sumRange(L, R, node.right);
    } else {
        return (
            this.sumRange(L, M, node.left) + 
            this.sumRange(M + 1, R, node.right)
        );
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */