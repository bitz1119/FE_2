/**
 * @param {number[]} height
 * @return {number}
 */

 function maxLeft(i,height){
    let leftMax = 0;
    for(let j = i-1;j>=0;j--){
        leftMax = Math.max(leftMax,height[j])
    }
    return leftMax;
}

function maxRight(i, height){
    let rightMax = 0;
    for(let j = i + 1;j<height.length;j++){
        rightMax = Math.max(rightMax,height[j])
    }
    return rightMax;
}


var trap = function(height) {
    let totalWater = 0;
    for(let i = 0;i<height.length;i++){
        let waterStored = Math.min(maxLeft(i,height),maxRight(i,height)) - height[i];
        waterStored = waterStored > 0 ? waterStored : 0;
        totalWater = totalWater + waterStored ;
    }
        return totalWater;
};