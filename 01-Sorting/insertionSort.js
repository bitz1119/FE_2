let arr = [4,5,3,2,1,8];

for(let i = 1;i<arr.length;i++){
    for(let j = i;j>0;j--){
        if(arr[j-1] > arr[j]){
            //swap
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
        else{
            break;
        }
    }
}


console.log(arr);
