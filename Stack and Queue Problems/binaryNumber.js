let queue = ["1"];
let n = 10;
// run a loop 

for (let i = 0; i < n;i++){
    let current = queue[0];
    queue.shift();
    console.log(current);
    let binaryNum1 = current + "0";
    let binaryNum2 = current + "1";
    queue.push(binaryNum1);
    queue.push(binaryNum2);

}


