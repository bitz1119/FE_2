let arr = [14,15,9,8,2,11,21,34,35,26,39]
let noOfBuckets = Math.ceil(Math.max(...arr)/10);

let buckets = new Array(noOfBuckets);

for (let index = 0; index < buckets.length; index++) {
    buckets[index] = [];
}

for (let index = 0; index < arr.length; index++) {
    let bucketNumber = Math.floor(arr[index]/10);
    console.log(bucketNumber)
    buckets[bucketNumber].push(arr[index]);
}

console.log(buckets);



