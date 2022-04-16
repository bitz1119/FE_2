

// arr - Sorted array
function binarySearch(arr,numberToSearch) {
    let start = 0;
    let end = arr.length-1;
    let bestIndexTillNow = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === numberToSearch) {
            // voilla found the answer
            // BUT STILL SEARCH IN LEFT
            bestIndexTillNow = mid;
            end = mid-1;
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

    return bestIndexTillNow;
}

let numberToSearch = 2;
let firstOccurrence = binarySearch([1,1,1,1,2,2,2,2,2,2,3,4,4,4,4,4],)  // 4





// let thirdoccurrence = firstOccurrence + 2;

// if(arr[thirdoccurrence] === numberToSearch){
//     console.log(thirdoccurrence);
// }
// else console.log("404 nt found");
