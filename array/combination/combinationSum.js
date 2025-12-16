console.log("combination sum problem")

let arr = [2,3,6,7];
target = 7;

let solve = (arr, i, ans, temp, target) => {
    if(target === 0){
        ans.push([...temp]);
        return;
    }
    if(i >= arr.length || target < 0){
        return;
    }

    
    // pick
    if(target >= arr[i] ){
        solve(arr, i, ans, [...temp, arr[i]], target-arr[i]);
    }

    // not pick
    solve(arr, i+1, ans, temp, target)
}

const combinationSum = (arr, target) => {
    let ans = [];
    solve(arr, 0, ans, [], target);
    return ans;
}

let ans = combinationSum(arr, target)

console.log("combination sum : ", ans);