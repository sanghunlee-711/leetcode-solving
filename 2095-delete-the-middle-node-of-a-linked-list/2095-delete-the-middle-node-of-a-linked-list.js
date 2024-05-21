/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head.next) return null;
    let count = 0;
    let p1 = head, p2 = head;
    
    //길이
    while(p1) {
        count++;
        p1 = p1.next;
    }
    
    let middle = Math.floor(count / 2);
    
    for(let i = 0; i < middle - 1; i++) {
        p2 = p2.next;
    }
    
    p2.next = p2.next.next;
    return head;
};