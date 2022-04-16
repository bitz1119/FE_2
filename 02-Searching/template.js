// No need to change the code below
//------------------------------------------------
 
process.stdin.resume(); // A Readable Stream that points to a standard input stream (stdin)
process.stdin.setEncoding('utf-8'); // so that the input doesn't transform

let inputString1 = "";
let inputString = "";
let currentLine = 0;
 
process.stdin.on('data', function (userInput) {
    inputString1 = inputString1 + userInput; // taking the input string
});
 
process.stdin.on('end', function(x) {
    inputString1.trim();
    inputString1 = inputString1.split("\n"); // end line
    for(let i = 0; i< inputString1.length ; i++ ) {
        inputString += inputString1[i].trim() + ' ';
    }
    inputString.trim();
    inputString = inputString.split(" ");
    main();
});
 
function readline() {
    let result = inputString[currentLine++];
    return result; // change when you want to use strings, according to the problem
}
 
// ---------------------------------------------
 
 
// use readline() to read individual integers/strings
function main() {
    let name = readline();
    console.log(name);

	// let n = readline();
    // console.log(n);
    // let arr = [];
    // for (let i = 0; i < n; i++) {
    //     let temp = readline();
    //     arr.push(temp)
    // }
    // console.log(arr)
} 