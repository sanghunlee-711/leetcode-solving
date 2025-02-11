/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 T.C: O(k * n)
 */
var mergeKLists = function(lists) {
    //base
    if(lists.length === 0) return null;

    for(let i = 1; i < lists.length; i++) {
        const [prev, curr] = [lists[i-1], lists[i]]
        lists[i] = mergeList(curr, prev);
    }

    return lists[lists.length - 1];
};


var mergeList = function(l1, l2) {
    const dummy = new ListNode();
    let tail = dummy;

    while(l1 && l2) {
        if(l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    if(l1) tail.next = l1;
    if(l2) tail.next = l2;

    return dummy.next;
}