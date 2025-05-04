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
 pseudo)
 1. 원본 옆에 바로 카피를 붙인다. (interleave방식) 공간복잡도 줄이기 가능
 2. 아래와 같이 바로 분리 가능
 copy.next = copy.next.next
 origin.next= origin.next.next
 */
var copyRandomList = function(head) {
    let curr = head;
    
    //1.카피본을 origin다음에 계속 끼워넣음
    while(curr) {
        let copy = new Node(curr.val);
        copy.next = curr.next;
        curr.next = copy;
        curr = copy.next
    }

    //2. random 또한 할당해줌

    curr = head;

    while(curr) {
        if(curr.random) { 
            //카피본(curr.next)에 random할당해주기
            curr.next.random = curr.random.next;
        }
        //카피 건너뛰어야함.
        curr = curr.next.next;
    }
    
    //3. 원본과 카피 두개 별도로 나누기
    let dummy = new Node(null);
    let copyCurr = dummy;
    curr = head;
    while(curr) {
        //원본 복구
        let copy = curr.next;
        curr.next = copy.next;
        //copy본 만들기
        copyCurr.next = copy;
        //포인터 이동
        copyCurr = copy;
        curr = curr.next;
    }


    return dummy.next;
};