/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // size
    let total = n*n;
    let count = 1;
    let ans = [];
    // pointer
    let startRow = 0;
    let endRow = n-1;
    let startCol = 0;
    let endCol = n-1;
    if(n === 1){
        return [[1]];
    }
    for(let i = 0; i < n; i++){
        ans.push([]);
    }
    while(count <= total){
        // first row
        for(let i=startCol;i<=endCol&&count <= total; i++){
                ans[startRow][i] = count;
                count++;
        }
        startRow++;
        // last col
        for(let i=startRow;i<=endRow&&count <= total; i++){
                ans[i][endCol] = count;
                count++;
        }
        endCol--;

        // last row
        for(let i=endCol;i>=startCol&&count <= total; i--){
                ans[endRow][i] = count;
                count++;
        }
        endRow--;

         // first col
        for(let i=endRow;i>=startRow&&count <= total; i--){
                ans[i][startCol] = count;
                count++;
        }
        startCol++;

    }
    return ans;
};
