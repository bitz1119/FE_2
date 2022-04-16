function ternarySearch(arr, value){
    let start = 0;
    let end = arr.length - 1;
    while (start <= end){
        let mid1 = start + Math.floor((end-start)/3);
        let mid2 = end - Math.floor((end-start)/3);

        // mid is the answer
        if(arr[mid1] === value){
            return mid1;
        }
        else if(arr[mid2] === value){
            return mid2;
        }

        else if(value < arr[mid1]){
            end = mid1-1;
        }
        else if(value > arr[mid2]){
            start = mid2+1;
        }
        else{
            start = mid1+1;
            end = mid2-1;
        }
    }
    return -1;
}

console.log(ternarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],1));


