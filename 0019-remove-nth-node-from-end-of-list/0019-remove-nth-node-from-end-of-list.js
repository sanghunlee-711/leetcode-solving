/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 전체길이를 L로 보고
 삭제할 노드의 위치는 L - n + 1임
 우리는 L-n에서 next = next.next를 통해 삭제를 할것임
 1. fast를 n+1만큼 이동
 2. slow & fast를 끝까지 이동(fast가 null일때까지)
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let fast = dummy,
        slow = dummy;
    //1. fast를 n + 1 만큼 이동
    for(let i = 0; i <= n; i++) {
        fast = fast.next
    }

    //2. fast와 slow를 k만큼 끝까지 이동
    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }
    // 이때 slow는 k(=L-n)의 위치가 된다

    //3. 삭제
    slow.next = slow.next.next;

    return dummy.next;
};