console.log("count all the subsequence of sum k!!")

let solve = (arr, sum, i, k) => {
    if(sum === k){
        return 1;
    }
    if(i>=arr.length){
        return 0;
    }

    // pick
    let leftCount = solve(arr, sum+arr[i], i+1, k)
    // not pick
    let rightCount = solve(arr, sum, i+1, k);

    return leftCount + rightCount;
}
const allSubseqOfSumK = (arr, k) => {
    let ans = solve(arr, 0, 0, k);
    return ans;
}


let arr = [4, 9, 2, 5, 1] 
let k = 20

let ans = allSubseqOfSumK(arr, k)

console.log(ans);