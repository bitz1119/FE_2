/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//  https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    
    if(root===null){
        return [];
    }
    
    let ans = [];
    let queue = [];
    queue.push(root);
    queue.push(null);
    let level = []

    while(!(queue.length == 1 && queue[0] == null)){
        if(queue[0] != null){
            if(queue[0].left !== null){
                queue.push(queue[0].left);
            }
            if(queue[0].right !== null){
                queue.push(queue[0].right);
            }
            level.push(queue[0].val)
        }
        else{
            queue.push(null);
            ans.push(level);
            level = [];
        }
        queue.shift();
        
    }
    ans.push(level);

    return ans;
};





















