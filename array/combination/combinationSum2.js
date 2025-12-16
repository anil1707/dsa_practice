let arr = [1, 1, 1, 2, 2];
let target = 4;


let solve = (arr, ans, index, temp, target) => {
    if(target == 0){
        ans.push([...temp]);
        return;
    }

    if(index >= arr.length){
        return;
    }

    for(let i=index;i<arr.length;i++){
        if(i>index && arr[i] === arr[i-1]) continue;
        if(arr[i] <= target){
            temp.push(arr[i]);
            solve(arr, ans, i+1, temp, target-arr[i]);
            temp.pop();
        }
    }
}
const combinationSum2 = (arr, target) => {
    let ans = [];
    solve(arr, ans, 0, [], target);
    return ans;
}

let ans = combinationSum2(arr, target);

console.log("combination sum 2: ", ans)