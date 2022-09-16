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
 */
 var removeNthFromEnd = function(head, n) {
    
    // size of linkedlist
    let size = 0;
    let temp = head; 
    while(temp != null){
        size++;
        temp = temp.next;
    }
    
    // k  = size - n 
    // kth index
    let k = size - n;
    temp = head;
    for(let i = 0; i< k - 1; i++){
        temp = temp.next;
    }

    if(k == 0){
        head = head.next;
        return head;
    }
    temp.next = temp.next.next;
    return head;
    
};