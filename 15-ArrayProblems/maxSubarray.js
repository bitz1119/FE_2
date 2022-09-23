/**
 * @param {number[]} nums
 * @return {number}
 */

 var maxProfit = function(prices) {
    
    let minTillNow = 0;
    let maxProfit = 0;
    
    for(let i = 0;i < prices.length;i++){
        if(maxProfit < (prices[i]-minTillNow)){
            maxProfit = prices[i]-minTillNow;
        }
        
        minTillNow = Math.min(minTillNow, prices[i]);
    }
    
    return maxProfit;
    
};

var maxSubArray = function(nums) {
    
    let prefixSum = [];
    let sum = 0;
    for(let i = 0; i< nums.length; i++){
        prefixSum.push(sum + nums[i]);
        sum += nums[i];
    }
    let maxSubarraySum = maxProfit(prefixSum);
    
    if(maxSubarraySum == 0){
        return Math.max(...nums);
    }
    return maxSubarraySum;
    
};