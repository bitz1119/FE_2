/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    

    for(let i = 0;i<strs[0].length;i++){
        for(let j = 0;j<strs.length;j++){
            if(strs[j][i] !== strs[0][i]){
                return strs[j].slice(0,i);
            }
        }
    }
    return strs[0]
    
};