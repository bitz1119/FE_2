/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//  https://leetcode.com/problems/merge-two-sorted-lists/

 var mergeTwoLists = function(list1, list2) {
    
    let curr1 = list1;
    let curr2 = list2;
    let newLinkedlistHead = null;
    let newLinkedlistLast = null;
    
    if(list1 == null){
        return list2;
    }
    
    if(list2 == null){
        return list1;
    }
    
    if(curr1.val <= curr2.val){
            newLinkedlistHead = curr1;
            curr1 = curr1.next;
        }
        else{
            newLinkedlistHead = curr2;
            curr2 = curr2.next;
        }
    
    newLinkedlistLast = newLinkedlistHead;
    
    while(curr1 != null && curr2 !=null){
        if(curr1.val <= curr2.val){
            newLinkedlistLast.next = curr1;
            curr1 = curr1.next;
        }
        else{
            newLinkedlistLast.next = curr2;
            curr2 = curr2.next;
        }
        newLinkedlistLast = newLinkedlistLast.next;
    }
    
    if(curr1 != null){
        newLinkedlistLast.next = curr1;
    }
    else if(curr2 != null){
        newLinkedlistLast.next = curr2;
    }
    
    return newLinkedlistHead;
      
};