/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let s = 0;
    let e = arr.length - 1;
    let ans = -1;
    
    while(s <= e){
        let mid = Math.floor((s+e)/2);
        if(arr[mid] < arr[mid+1]){
            s = mid + 1;
        }
        else{
            ans = mid;
            e = mid - 1;
        }
    }
    
    return ans;
    
};