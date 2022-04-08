let arr = [5,4,3,2,1,10];
let k = 3;

for (let i = 0; i < k ;i++){
    // if required swap all subsequent element in array
    for (let j = 0; j < arr.length-1;j++){
        // should i swap
        // if ith number is greater than (i+1)th
        if(arr[j] > arr[j+1]){
           // how should i swap
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}


console.log(arr[arr.length-k]);
