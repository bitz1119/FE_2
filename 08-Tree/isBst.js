/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


//  https://leetcode.com/problems/validate-binary-search-tree/

 function isBST(root,min,max){
    if(root === null){
        return true;
    }
    if(root.val < max && root.val>min){
        return isBST(root.left,min,root.val) && isBST(root.right,root.val,max);
    }
    else{
        return false;
    }
}



var isValidBST = function(root) {
    return isBST(root, -100000000000 , 100000000000 );
};