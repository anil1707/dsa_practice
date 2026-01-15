// from jump 1 problem

// recurstion
let cost = [20, 30, 40, 20]
console.log("cost", cost)
let frogJump = (cost, i) =>{
    if(i == 0 ){
        return 0;
    }
    let left = Math.abs(cost[i] - cost[i-1]) + frogJump(cost, i-1);
    let right = Infinity;
    if(i>1)
     right = Math.abs(cost[i] - cost[i-2]) + frogJump(cost, i-2);
    return Math.min(left, right);
}

// memoization
let frogJump2 = (cost, i, dp) =>{
    if(i == 0 ){
        return 0;
    }
    if(dp[i] != -1) return dp[i];
    let left = Math.abs(cost[i] - cost[i-1]) + frogJump(cost, i-1);
    let right = Infinity;
    if(i>1)
     right = Math.abs(cost[i] - cost[i-2]) + frogJump(cost, i-2);
     dp[i] = Math.min(left, right);
     return dp[i];
}

// tabulation
let frogJump3 = (cost, dp) =>{
    dp[0] = 0;
    let ans = 0;
    for(let i = 1;i<cost.length;i++){
        let left = Math.abs(cost[i] - cost[i-1]) + dp[i-1];
        let right = Infinity;
    if(i>1)
     right = Math.abs(cost[i] - cost[i-2]) + dp[i-2];
    ans = Math.min(left, right);
    dp[i] = ans;
    }
    return ans;
}

let minCost = (cost) =>{
    let dp = Array(cost.length + 1).fill(-1);
    // let ans = frogJump(cost, cost.length - 1);
    // let ans = frogJump2(cost, cost.length-1, dp)
    let ans = frogJump3(cost, dp)
    console.log("Ans", ans);
}

minCost(cost);