
// with recusion
let solveWithRecursion = (nums, n) =>{
    if(n <0){
        return 0;
    }
    let left = nums[n] + solveWithRecursion(nums, n-2);
    let right = solveWithRecursion(nums, n-1);
    let ans = Math.max(left, right);
    return ans;
}

// with dp (memoization)
let solveWithDpArray = (nums, n, dp) =>{
    if(n <0){
        return 0;
    }
    if(dp[n] !== -1){
        return dp[n];
    }
    let left = nums[n] + solveWithDpArray(nums, n-2, dp);
    let right = solveWithDpArray(nums, n-1, dp);
    let ans = Math.max(left, right);
    dp[n] = ans;
    return ans;
}

// convert into tabular
let tabular = (nums) => {
    let dp = Array(nums.length).fill(-1);
    dp[0] = nums[0];
    dp[1] = nums[1];
    for(let i=2;i<nums.length;i++){
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
    }
    return dp[nums.length-1]
}

// optimization of tabulation
let optTabular = (nums) =>{
    let prev = nums[1];
    let prevToPrev = nums[0];
    let ans = 0;
    for(let i=2;i<nums.length;i++){
        ans = Math.max(nums[i] + prevToPrev, prev);
        prevToPrev = prev;
        prev = ans;
    }
    return ans;
}

var rob = function(nums) {
    let dp = Array(nums.length+1).fill(-1);
    // return solveWithDpArray(nums, nums.length-1, dp);
    // return solveWithRecursion(nums, nums.length-1)
    // return tabular(nums)
    return optTabular(nums)
};

console.log("Ans:", rob([1,2,3,1]))