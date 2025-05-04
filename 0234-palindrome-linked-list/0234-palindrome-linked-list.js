/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 // Palindrome은 끝과 앞 비교 해서 중간까지 옴
 -> 중간까지가서
 1) 앞에서 중간
 2) 중간에서 끝
 으로해서 fast & slow로 비교
 */
var isPalindrome = function(head) {
    let fast = head,
        slow = head;
    
    //뒤쪽 절반만 뒤집기 위해 중간 찾기
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //이제 slow가 절반의 위치에 있음.

    //slow를 뒤집기
    let prev = null;
    let curr = slow;

    while(curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let temp = head;
    //뒤집은 slow인 prev를 앞에서 부터 비교
    
    while(prev) {
        if(temp.val !== prev.val) return false;
        temp = temp.next
        prev = prev.next;
    }

    return true;
};