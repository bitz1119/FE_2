/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */


 function checkAndRemoveConsecutive(stack,k){
    let counter = 1;
    for(let i = stack.length-2;i>=0 && i>stack.length-k-1;i--){
        if(stack[stack.length-1] === stack[i]){
            counter++;
        }
        else{
            return;
        }
    }

    if(counter === k){
        for(i = 0;i<k;i++){
            stack.pop();
        }
    }
    return;
    
}

var removeDuplicates = function(s, k) {
    let stack = []
    for(let i = 0;i<s.length;i++){
        stack.push(s[i]);
        checkAndRemoveConsecutive(stack,k);
    }
    return stack.join("");
};