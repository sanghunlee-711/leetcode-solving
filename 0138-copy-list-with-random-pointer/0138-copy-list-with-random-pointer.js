/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
 const map = new Map();
var copyRandomList = function(head) {
    if(!head) return null;
    if(map.has(head)) return map.get(head);

    const copy = new Node(head.val);
    map.set(head, copy);

    copy.next = copyRandomList(head.next);
    copy.random = map.get(head.random) || null;
    return copy
};