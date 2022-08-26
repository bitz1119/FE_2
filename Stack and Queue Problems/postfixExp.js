let str = "6712*+-"
let stack = [];
for (let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){
        stack.push(parseInt(str[i]));
    }
    else{
        let ele1 = stack.pop();
        let ele2 = stack.pop();
        let ans = 0;
        if(str[i] === '+'){
            ans = ele1 + ele2;
        }   
        else if(str[i] === '-'){
            ans = ele2 - ele1;
        }
        else if(str[i] === '*'){
            ans = ele1 * ele2;
        }
        else{
            ans = ele2 / ele1;
        }
        stack.push(ans);
    }
}

console.log(stack.pop());
