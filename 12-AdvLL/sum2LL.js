
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = null;
    let sumHead = null;
    let carry = 0;
    while(l1 != null || l2 != null){
        let val1 = (l1 == null) ? 0 : l1.val;
        let val2 = (l2 == null) ? 0 : l2.val;
        if(sum == null){
            sum = new ListNode((val1+val2+carry)%10); 
            carry = Math.floor((val1+val2+carry)/10);
            sumHead = sum; 
        }
        else {
            sum.next = new ListNode((val1+val2+carry)%10); 
            carry = Math.floor((val1+val2+carry)/10);
            sum = sum.next;
        }
        if(l1 != null)
            l1 = l1.next;
        if(l2 != null)
            l2 = l2.next;
    }
    
    if(carry === 1){
        sum.next = new ListNode(1);
    }
    return sumHead;
    
};