
// ====================== recursion ==============================
let solve = (n) =>{
    if(n <=1){
        return 1;
    }
    return solve(n-1) + solve(n-2);

}
var climbStairs = function(n) {
    return solve( n);
};

let ans = climbStairs(5);

console.log("Ans", ans)

// =================== memoization =================================


let solve1 = (n, dp) =>{
    if(n <= 1){
        return 1;
    }
    if(dp[n] !== -1){
        return dp[n];
    }
    let ans = solve1(n-1, dp) + solve1(n-2, dp);
    dp[n] = ans;
    return ans;

}
var climbStairs1 = function(n) {
    let dp = Array(n+1).fill(-1);
    let ans =  solve1( n, dp);
    console.log("ans", ans)
};

climbStairs1(5);


// ================= tabulation ======================================

let climbStairs2 = (n) =>{
    let dp = Array(n+1).fill(-1);
    dp[0] = 1;
    dp[1] = 1;
    let ans = dp[0]+dp[1];
    for(let i=2;i<=n;i++){
        ans = dp[i-1] + dp[i-2];
        dp[i] = ans;
    }
    console.log("Ans", ans);
}

climbStairs2(5);

// ================ optimization ====================================


