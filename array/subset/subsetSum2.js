// generate all the subset without any repeatetive subset

let arr = [2, 1, 1, 1];

let solve = (arr, ans, index, temp) =>{
    ans.push([...temp]);
    
    for(let i = index; i<arr.length;i++){
        if(i !== index && arr[i] == arr[i-1]) continue;
        temp.push(arr[i]);
        solve(arr, ans, i+1, temp);
        temp.pop();
    }
}
let subsetSum2 = (arr) =>{
    let ans = [];
    solve(arr, ans, 0, []);
    return ans.sort((a, b) => a-b);
}

console.log("subsetSum2", subsetSum2(arr));