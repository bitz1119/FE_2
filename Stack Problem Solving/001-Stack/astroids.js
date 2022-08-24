let astroids = [11,-13,15,18,20,-30]
let stack = []

function differentSign(a,b){
    if((a>0 && b<0)||(a<0 && b >0)){
        return true;
    }
    else{
        return false;
    }

}


for (let i = 0; i < astroids.length; i++) {
    // stack is empty so push
    if(stack.length == 0){
        stack.push(astroids[i]);
        continue;
    }
    else{
        // compare top and current element
        if(stack[stack.length-1]>=0 && astroids[i]>=0){
            stack.push(astroids[i]);
        }
        // if both are nagetive
        else if(stack[stack.length-1] < 0 && astroids[i]<0){
            stack.push(astroids[i]);
        }
        else{
            while(stack.length > 0 && differentSign(stack[stack.length-1],astroids[i])){
                if(Math.abs(stack[stack.length-1] )< Math.abs(astroids[i])){
                    stack.pop();
                }
            }
            if(stack.length==0 || Math.abs(astroids[i]) > Math.abs(stack[stack.length-1])){
                stack.push(astroids[i]);
            }
        }
    }
}

console.log(stack);
