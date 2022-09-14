var trap = function(height) {

    let maxLeft = [0];
    let maxTillNow = 0;
    for (let i = 1; i < height.length; i++){
        maxLeft.push(Math.max(maxTillNow, height[i-1]));
        maxTillNow = Math.max(maxTillNow, height[i-1]);
    }

    let maxRight = [0];
    let maxRightTillNow = 0;
    for (let i = height.length - 2; i >= 0; i--){
        maxRight.push(Math.max(maxRightTillNow, height[i+1]));
        maxRightTillNow = Math.max(maxRightTillNow, height[i+1]);

    }
    maxRight.reverse();

    let totalWater = 0;
    for(let i = 0;i<height.length;i++){
        let waterStored = Math.min(maxLeft[i],maxRight[i]) - height[i];
        waterStored = waterStored > 0 ? waterStored : 0;
        totalWater = totalWater + waterStored ;
    }
        return totalWater;
};