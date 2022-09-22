/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor = 0;
    for(let i = 0;i <nums.length;i++){
        xor = xor^nums[i];
    }
    return xor;
};