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
 2의 배수가 주어지므로 딱 반접었을때 위치가 twin임
 따라서 중간을 찾고 앞 또는 뒤를 reverse 시킨 뒤 각자 회문 시켜서 합을 구하면 됨.
 T.C: O(N), S.C:O(1)
 */
var pairSum = function(head) {
    //중간 포인터 찾으며 뒤집기
    let slow = head, fast = head, prev = null;

    while(fast && fast.next) {
        fast = fast.next.next;
        let tmp = slow.next; //뒤집기 위해
        slow.next = prev;
        prev = slow;
        slow = tmp;
    }
    //prev는 왼쪽의 head가 되는 것

    let max = 0;

    //두개로 나뉜 것 회문 시작
    while(slow) {
        max = Math.max(max, prev.val + slow.val);
        prev = prev.next;
        slow = slow.next;
    }
    return max;
};