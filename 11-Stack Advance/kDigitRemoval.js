/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
    if(num.length <= k){
        return "0";
    }

    let stack = [];
    for(let i = 0; i < num.length;i++){
        let currEle = parseInt(num[i]);
        if(stack.length === 0 || stack[stack.length - 1] <= currEle){
            stack.push(currEle);
        }
        else{
            while(k > 0 && stack[stack.length - 1] > currEle){
                stack.pop();
                k--;
            }
            stack.push(currEle);
        }
    }
    for(let i = 0; i < k;i++){
        stack.pop();
    }
    while(stack.length > 0 && stack[0] == 0){
        stack.shift();
    }
    return stack.join("").length == 0? "0" : stack.join("");
};


console.log(removeKdigits("10200",2));
// 0
// 00