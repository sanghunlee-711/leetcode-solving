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
 * Divide and conquere way
 * T.C O(N*K)
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;

    for(let i = 0; i < lists.length; i++) {
        const [prev, curr] = [lists[i-1], lists[i]];

        const mergedList = mergeLists(prev, curr);
        lists[i] = mergedList;
    }

    return lists[lists.length - 1];
};


var mergeLists = function(l1, l2) {
    const dummy = new ListNode();
    let tail = dummy;

    while(l1 && l2) {
        if(l1.val < l2.val) {
            tail.next = l1
            l1 = l1.next
        }else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next;
    }

    if(l1) tail.next = l1;
    if(l2) tail.next = l2;

    return dummy.next
}