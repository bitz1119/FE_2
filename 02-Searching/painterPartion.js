function sum(arr){
    let sum= 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum+arr[index];
    }
    return sum;
}


function validate(arr,p,mid){
    let currAllocation = arr[0];
    let index = 1;
    while(p > 0 && index < arr.length){
        if(arr[index] > mid){
            return false;
        }
        else if(currAllocation + arr[index] > mid){
            p--;
            currAllocation = arr[index];
            index++;
        }
        else{
            currAllocation += arr[index];
            index++;
        }
    }

    if(index==arr.length && p==1){
        return true;
    }
    return false;

}

let arr = [10,20,30,40];
let p = 2;

// range 
let start = arr[0];
let end = sum(arr);
let bestAns = -1;

while(start<=end){
    let mid = Math.floor((start+end)/2);
    let canPossibleAnswer = validate(arr,p,mid);

    if(canPossibleAnswer == true){
        // go to left side
        end = mid-1;
        bestAns = mid;
    }
    else{
        // right start
        start = mid+1;
    }
}

console.log(bestAns)

