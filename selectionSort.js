let arr=[{'name':'Ram','salary':100000},{'name':'Ramesh','salary':10000},{'name':'Rakesh','salary':500000},{'name':'Riya','salary':650000},{'name':'Rithik','salary':45000},{'name':'Ritesh','salary':230000}]

// return minIndex
function findMin(arr, startIndex){
    let minIndexTillNow = startIndex;
    for(let i = startIndex; i < arr.length; i++){
        if(arr[minIndexTillNow].salary > arr[i].salary){
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

console.log(arr[arr.length-2].name);


// a.localeCompare(b)
// if a should come before b --> -1
// if b should come before a --> 1
// if b is same as a --> 0