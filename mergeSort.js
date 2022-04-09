
function merge(arr1, arr2) {
    let arr3 = new Array(arr1.length+arr2.length);
    let ptr1 = 0;
    let ptr2 = 0;
    for(let i = 0; i < arr3.length; i++) {
        if(ptr1 >= arr1.length){
            arr3[i] = arr2[ptr2];
            ptr2++;
        }
        else if(ptr2 >= arr2.length){
            arr3[i] = arr1[ptr1];
            ptr1++;
        }
        else if(arr1[ptr1]<arr2[ptr2]){
            arr3[i] = arr1[ptr1];
            ptr1++;
        }
        else{
            arr3[i] = arr2[ptr2];
            ptr2++
        }
    }
    return arr3;
}


console.log(merge([1,5,6,10],[2,3,4,7,8,9]));

