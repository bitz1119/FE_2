let arr =[1,1,3,4,2,2,2,1,3,4,5,1,2,4,1];


// frequency array 
let freqArray = new Array(Math.max(...arr)+1).fill(0);
// we will be storing frequency from 0 5 
for (let index = 0; index < arr.length; index++) {
    freqArray[arr[index]]++;
}
console.log(freqArray);

let prefixSum = new Array(freqArray.length).fill(0);
console.log(prefixSum);
for (let index = 1; index < prefixSum.length; index++) {
    prefixSum[index] = prefixSum[index-1] + freqArray[index] ;
}
console.log(prefixSum);

let ansArray = new Array(arr.length);
for (let index = arr.length-1; index >= 0; index--){
    let positionOfArrIndex = prefixSum[arr[index]];
    prefixSum[arr[index]]--;
    ansArray[positionOfArrIndex-1] = arr[index];
}

console.log(ansArray);