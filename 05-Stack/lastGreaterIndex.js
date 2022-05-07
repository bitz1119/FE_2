let arr = [31,27,14,21,30,22]

function findLastGreaterIndex(arr) {
    let stack = [];
    let ansArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        if(stack.length === 0){
            ansArr[i] = 1;
        }
        else if(arr[stack[stack.length - 1]] > arr[i]){
            ansArr[i] = i - stack[stack.length - 1];
        }
        else{
            // pop the element untill either it is empty or it is greater
            while(stack.length > 0 && arr[stack[stack.length - 1]]<arr[i]){
                stack.pop();
            }
            if(stack.length === 0){
                ansArr[i] = 1;
            }
            else{
                ansArr[i] = i - stack[stack.length - 1];
            }
        }
        stack.push(i);
    }

    console.log(ansArr);

}


findLastGreaterIndex(arr);


// for next greater element we can reverse and solve 