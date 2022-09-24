/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let left = 0;
    let right = matrix[0].length-1;
    let top = 0;
    let bottom = matrix.length-1;
    let dir = 0;
    
    let ans = [];
    
    while(left <= right && top<=bottom){
        if(dir == 0){
            for(let i = left; i <= right;i++){
                ans.push(matrix[top][i]);
            }
            top++;
            dir++;
        }
        else if(dir == 1){
            for(let i = top; i <= bottom;i++){
                ans.push(matrix[i][right]);
            }
            right--;
            dir++;
        }
        else if(dir == 2){
            for(let i = right; i >= left;i--){
                ans.push(matrix[bottom][i]);
            }
            bottom--;
            dir++;
        }
        else if(dir == 3){
            for(let i = bottom; i >= top;i--){
                ans.push(matrix[i][left]);
            }
            left++;
            dir++;
        }
        dir = dir % 4;
    }
    
    return ans;
    
};