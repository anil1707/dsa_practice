console.log("print any subsequenc of sum k");

let solve = (arr, ans, temp, sum, i, k) =>{
    if(sum === k){
        ans.push(temp);
        return true;
    }

    if(i >= arr.length) {
        return false;
    }

    // pick
    let left = solve(arr, ans, [...temp, arr[i]], sum+arr[i], i+1, k);
    if(left == true){
        return true;
    }
    // not pick
    let right = solve(arr, ans, [...temp], sum, i+1, k);
    if(right == true){
        return true;
    }

    return false
}
const subsequencOfSumk = (arr, k) => {
    let ans = [];
    solve(arr, ans, [], 0, 0, k);
    return ans.length > 0 ? ans[0] : [];
}
let arr = [4, 9, 2, 5, 1] 
let k = 22

let ans = subsequencOfSumk(arr, k)

console.log(ans);