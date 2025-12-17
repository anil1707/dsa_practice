// given an array return sum of all subset in sorted order

let arr = [2, 4, 3, 1];

let solve = (arr, ans, index, sum) =>{
    if(index>= arr.length){
        ans.push(sum);
        return;
    }
    
    // pick
    solve(arr, ans, index+1, sum+arr[index]);
    // not pick
    solve(arr, ans, index+1, sum);
}
let subsetSum1 = (arr) =>{
    let ans = [];
    solve(arr, ans, 0, 0);
    return ans.sort((a, b) => a-b);
}

console.log("subsetSum1", subsetSum1(arr));