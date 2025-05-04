/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 inplace가 아니라면 두벌 만들어서 하나씩 붙이면 됨 하지만 아니죠
 1. 절반찾음
 2. 뒤쪽 절반 Reverse(in memory)
 3. 앞쪽 절반과 뒤쪽절반 하나씩 Merge하며 진행

 */
var reorderList = function(head) {
    //1 절반 찾기

    let slow = head,
        fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //2. 뒤쪽 절반 뒤집기.
    let prev = null,
        curr = slow.next;
    slow.next = null; // 원본의 뒤쪽 절삭을 위함

    while(curr) {
        const next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    //prev가 reverse의 헤드가 됨

    //3. merge
    let first = head, second = prev;

    while(second) {
        const firstNext = first.next,
            secondNext = second.next;
        
        first.next = second
        second.next = firstNext;

        first = firstNext;
        second = secondNext;
    }
};