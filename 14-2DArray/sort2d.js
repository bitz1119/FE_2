var input = '';

function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split(/\s+/).map(Number);
}

function main() {
    prepareInput();
    var N = input.splice(0, 1)[0];
    var M = input.splice(0, 1)[0];
    console.log(N,M);
    let arr = [];
    for (var i = 0; i < N;i++){
        for (var j = 0; j < M;j++){
            let x = input.splice(0,1)[0];
            arr.push(x);
        }
    }

    arr.sort((a,b)=> a-b);

    let ansArr = [];
    let counter = 0;
    for (let i = 0; i < N;i++){
        let tempArr = [];
        for (let j = 0; j < M;j++){
            tempArr.push(arr[counter++]);
        }
        ansArr.push(tempArr);
    }

    console.log(ansArr)
    process.exit();

}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);