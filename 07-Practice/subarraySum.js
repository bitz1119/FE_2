/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSum = -123456789;
    
    for(let i = 0;i<nums.length;i++){
        let currMaxSum = -123456789;
        let currSum = 0;
        for(let j = i;j<nums.length;j++){
            // i -- j is 1 subarray
            currSum += nums[j];
            currMaxSum = Math.max(currMaxSum,currSum);
        }
        maxSum = Math.max(currMaxSum,maxSum);
    }
    return maxSum;
};