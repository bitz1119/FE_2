let arr = [1,2,3]
let k = 3;
let count = 0;

for (let i = 0; i < arr.length;i++){
    let sum = 0;
    for (let j = i; j<arr.length;j++){
        sum = sum + arr[j];
        if(sum === k){
            count++;
        }
    }
}
console.log(count)






// print all subarrays

// for (let i = 0; i < arr.length;i++){
//     let subarray = [];
//     for (let j = i; j<arr.length;j++){
//         subarray.push(arr[j]);
//         console.log(subarray);
//     }
// }
