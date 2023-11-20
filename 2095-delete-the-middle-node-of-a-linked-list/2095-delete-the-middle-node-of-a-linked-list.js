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
    if(head.next === null) return null;
    
    const size = getSize(head)   
    const half = Math.floor(size / 2);
    let curr = head;
    let count = 0;
    
    
    while(curr) {
        count++;
        
        if(count === half) {
            const next = curr.next.next;
            curr.next = next;
        }
        
        curr = curr.next;
    }
    
    return head;
};

const getSize = (node) => {
        let size = 0;
        let curr = node;
        
        while(curr) {
            curr = curr.next;
            size++;
        }
        
        return size;
}