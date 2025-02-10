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
 */
var mergeKLists = function(lists) {
    let nodes = [];

    for(let list of lists) {
        while(list) {
            nodes.push(list.val);
            list = list.next;
        }
    }

    nodes.sort((a,b)=> a-b);
    let res = new ListNode(0);
    let curr = res;

    for(let node of nodes) {
        curr.next = new ListNode(node);
        curr = curr.next;
    }

    return res.next;
};