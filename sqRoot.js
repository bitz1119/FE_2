
function sqrt(n)
{
    let start = 0;
    let end = n;

    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if(mid*mid == n){
            return mid;
        }
        else if(mid*mid < n){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return -1;
}   

console.log(sqrt(10000));