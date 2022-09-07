/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let prefixSum = [];
    // prefixSum
    let runningSum = 0;
    for(let i = 0;i<nums.length;i++){
        prefixSum[i] = runningSum+nums[i];
        runningSum = runningSum+nums[i];
    }

    // creating a map
    let map = new Map();
    map.set(0,1);
    let ans = 0;
    for(let i = 0;i<nums.length;i++){
        ans = ans + ((map.has(prefixSum[i] - k))?map.get(prefixSum[i] - k):0);

        if(map.has(prefixSum[i])){
            map.set(prefixSum[i],map.get(prefixSum[i])+1);
        }
        else{
            map.set(prefixSum[i],1);
        }
    }
    return ans;
    
};