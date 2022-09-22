
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map  = new Map();
    for(let i = 0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }
        else{
            map.set(nums[i],1);
        }
    }
    let sum = 0;
    map.forEach((value,key)=>{
        if(value == 1){
            sum += key;
        }
    })
    
    return sum;
};
