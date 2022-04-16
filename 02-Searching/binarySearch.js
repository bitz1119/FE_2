

// arr - Sorted array
function binarySearch(arr,numberToSearch) {
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === numberToSearch) {
            // voilla found the answer
            return mid;
        }
        else if( numberToSearch < arr[mid]){
            // go to left side
            end = mid - 1;
        }
        else{
            // go to right side
            start = mid +1
        }
    }

    return -1;
}

console.log(binarySearch([2,3,4,7,8,10,20,30],15))  // -1