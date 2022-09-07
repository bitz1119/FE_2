let arr = [1,1,2,2,2,3,3,4,5,6,6,6,6,7]

// iterate over each element
// check if element is there in your object
// true -> +1 to its freq
// false -> add number in array

let freqMap = {}

for (let i =0;i<arr.length;i++){
    if(freqMap[arr[i]] != undefined){
        freqMap[arr[i]] = freqMap[arr[i]] + 1;
    }
    else{
        freqMap[arr[i]] = 1;
    }
}
console.log(Object.keys(freqMap))

//iterate over array again and as soon as you find the element with freq 1, it will be done
let firstUniqueNumber;
for (let i = 0; i < arr.length;i++){
    if(freqMap[arr[i]] === 1){
        firstUniqueNumber = arr[i];
        break;
    }
}

console.log(firstUniqueNumber);


