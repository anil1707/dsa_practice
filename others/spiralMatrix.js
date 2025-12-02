console.log("convert matrix to spiral matrix");

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]

const convertSpiral = (matrix) =>{
    let ans = [];
    let count = 0;
    let total = matrix.length * matrix[0].length;
    let top = 0;
    let bottom = matrix.length-1;
    let left = 0;
    let right = matrix[0].length-1;
    while(count< total){
        for(let i=left;i<=right && count < total;i++){
            console.log(top, i)
            ans.push(matrix[top][i]);
            count++;
        }
        top++;
        for(let i = top;i<=bottom && count < total;i++){
            console.log(i, right)
            ans.push(matrix[i][right]);
            count++;
        }
        right--;
        for(let i = right;i>=left && count < total;i--){
            console.log(bottom, i)
            ans.push(matrix[bottom][i]);
            count++;
        }
        bottom--;
        for(let i=bottom;i>= top && count < total;i--){
            console.log(i, left)
            ans.push(matrix[i][left]);
            count++;
        }
        left++;
    }
    return ans;
}


console.log("Spiral Order", convertSpiral(matrix))