let n = 7;


// ========== recursive solution ==============
const fibb = (n) =>{
    if(n === 1 || n == 0){
        return n;
    }

    return fibb(n-1) + fibb(n-2);
}

let ans = fibb(n);
console.log("Ans", ans)


// ======== do the memoization =================
const fibb1 = (n, dp) =>{
    if(n === 1 || n == 0){
        return n;
    }

    if(dp[n-1] != -1){
        return dp[n];
    }
    let ans = fibb1(n-1, dp) + fibb1(n-2, dp);
    dp[n] = ans;
    return ans;
}

let solve = (n) => {
    let dp = Array(n).fill(-1);
    let ans = fibb1(n, dp);
    console.log("ans", ans)

}

solve(n);

// ======== do the tabulation ==================

let solve1 = (n) =>{
    let dp = Array(n).fill(-1);
    dp[1] = 1;
    dp[0] = 0;
    let ans = 0;
    for(let i=2;i<=n;i++){
        ans = dp[i-1] + dp[i-2];
        dp[i] = ans;
    }

    console.log("ans2", ans, dp[n]);

}

solve1(n);


// =============== optimized tabulation =================

let solve2 = (n) =>{
    let prev = 1;
    let prevToPrev = 0;
    let ans = prev + prevToPrev;
    for(let i=1;i<n;i++){
        ans = prev + prevToPrev;
        prevToPrev = prev;
        prev = ans;
    }

    console.log("Ans", ans)
}

solve2(n);







// 0    1   1   2   3   5   8   13


// let ans = fibb(n);
// let ans = fibb1(n);

// console.log("Ans", ans);