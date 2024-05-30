/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head,
        fast = head;
    
    //절반 중간에 slow포인터 이동
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    //fast는 끝으로 갔고, 중간에 위치한 slow부터 절반 뒤집기
    let prev = null,
        next = null;
    
    while(slow) {
        next = slow.next;
        slow.next = prev;
        
        prev = slow;
        slow = next;
    }
    
    let start = head,
        max = -Infinity;
    
    //prev가 뒤집은 절반의 헤드임.
    while(prev) {
        max = Math.max(start.val + prev.val, max);
        start = start.next;
        prev = prev.next;
        
    }
    
    return max;
};