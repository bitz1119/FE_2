/**
 * @param {number[][]} costs
 * @return {number}
 */
 var twoCitySchedCost = function(costs) {
    let costOfAllACity = 0;
    for(let i = 0;i<costs.length;i++){
        costOfAllACity += costs[i][0];
    }
    let diffArray = [];
    for(let i = 0;i<costs.length;i++){
        diffArray.push(costs[i][1] - costs[i][0])
    }
    // sort diff Array
    diffArray.sort((a,b)=>a-b);
    
    for(let i = 0;i<(diffArray.length)/2;i++){
        costOfAllACity += diffArray[i];
    }
    
    return costOfAllACity;
    
};