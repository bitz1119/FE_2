let num = 1234;

let duplicate = 1234;
let reverse = 0;

// reverse
while(duplicate > 0){
    let lastDigit  = duplicate%10;
    //add this last digit to reverse
    reverse = reverse*10 + lastDigit;
    duplicate = Math.floor(duplicate/10)
}

console.log(reverse);


