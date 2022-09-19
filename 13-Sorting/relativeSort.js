/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
    let bigNum = -1;
    let map = new Map();
    for(let i = 0;i<arr2.length;i++){
        map.set(arr2[i],i);
    }
    
    arr1 = arr1.sort((a,b)=>{
        let valA = map.has(a)?map.get(a):bigNum;
        let valB = map.has(b)?map.get(b):bigNum;
        // a and b both present in map
        if(valA != bigNum && valB != bigNum){
            return valA - valB;
        }
        
        // both are not present
        else if(valA == bigNum && valB == bigNum){
            return a - b;
        }
        
        // A is not present
        else if(valA == bigNum){
            return 1;
        }
        
        // B is not present
        else 
            return -1;
        
    })
    
    return arr1;
};