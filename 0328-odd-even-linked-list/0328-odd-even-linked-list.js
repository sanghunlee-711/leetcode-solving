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
// event head , odd head를 만들고 
// event head를 제일 뒤에 붙여주면 됨
var oddEvenList = function(head) {
    if(!head) return null;
    
    let odd = head,
        even = head.next,
        evenHead = even;
    
    while(even && even.next) {
        odd.next = even.next; //even을 별도로 빼기위해 관계성 없앰
        odd = odd.next;
        even.next = odd.next; //even을 기존리스트에서 빼냄
        
        even = even.next;
    }
    odd.next = evenHead;
    
    return head;
};