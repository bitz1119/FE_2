let str = "[{()]]";
let stack = [];
let isStringValid = true;

for (let i = 0; i < str.length; i++) {
    // check if we have opening bracket
    if(str[i]=== '[' || str[i] === '{' || str[i] === '('){
        // push in stack
        stack.push(str[i]);
    }
    // In case of closed bracket, I will check last opened bracket
    else {
        if(str[i] === '}'){
            if(stack[stack.length - 1] === '{'){
                stack.pop();
                continue;
            }
            else{
                // string is not valid
                isStringValid = false;
            }
        }
        if(str[i] === ']'){
            if(stack[stack.length - 1] === '['){
                stack.pop();
                continue;
            }
            else{
                // string is not valid
                isStringValid = false;
            }
        }

        if(str[i] === ')'){
            if(stack[stack.length - 1] === '('){
                stack.pop();
                continue;
            }
            else{
                // string is not valid
                isStringValid = false;
            }
        }
    }
}


if(isStringValid === true && stack.length === 0){
    console.log("String is Valid");
}
else{
    console.log("String is not Valid");
}
