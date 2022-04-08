let arr = [3,4,5,8,1,2,3];

// return minIndex
function findMin(arr, startIndex){
    let minIndexTillNow = startIndex;
    for(let i = startIndex; i < arr.length; i++){
        if(arr[minIndexTillNow] > arr[i]){
            minIndexTillNow = i;
        }
    }
    return minIndexTillNow;
}


// go to each index 
for(let i = 0;i<arr.length;i++){
    // find the minimum index from i to length of arr
    let minIndex = findMin(arr,i);
    // swap with ith index    
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr);
