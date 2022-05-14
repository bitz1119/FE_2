/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let longestcommonPrefix = "";
    let lscStillGoing = true;
    for(let i = 0;i<strs[0].length;i++){
        let char = strs[0][i];
        for(let j = 1;j<strs.length;j++){
            if(char != strs[j][i]){
                lscStillGoing = false;
                break;
            }
        }
        if(lscStillGoing == true){
            longestcommonPrefix = longestcommonPrefix + char;
        }
        else{
            break;
        }
    }
    return longestcommonPrefix;
    
    
};