console.log("Pring all the subsequence whose sum is k");

let arr = [4, 9, 2, 5, 1] 
let k = 10

let solve = (arr, ans, temp, sum, i, k) =>{
    if(sum == k){
        ans.push(temp);
        return;
    }
    console.log("sovle")
    if(i>= arr.length){
        return;
    }
    

    // pick
    solve(arr, ans, [...temp, arr[i]], sum+arr[i], i+1, k);
    // not pick
    solve(arr, ans, [...temp], sum, i+1, k);
}

let countSubsequenceWithTargetSum = (arr, k) =>{
    let ans = [];
    solve(arr, ans, [], 0, 0, k);
    return ans;
}

let ans = countSubsequenceWithTargetSum(arr, k);

console.log("All subsequence of sum k is: ", ans);