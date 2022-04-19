
let n = 10;
let precision = 4;


let start = 0;
let end = n;
let ans = -1;
let mid = 0;
while(end-start > Math.pow(10,-precision)){
    console.log(mid);
    mid = (start+end)/2;
    if(mid*mid == n){
        ans = mid;
        break;
    }
    else if(mid*mid > n) {
        end = mid;
    }
    else{
        start = mid;
    }
}
ans = mid;
console.log(ans);


