let arr1 = [0,2,3,4]
let arr2 = [3,2,1,0];

// how many pairs
let answer = 0;
for (let i = 0; i < arr1.length; i++) {
    for(let j = i+1;j<arr1.length;j++){
        if(arr1[i]+arr1[j] > arr2[i]+arr2[j]){
            answer++;
        }
    }
}

console.log(answer); //4


// complexity - n2



