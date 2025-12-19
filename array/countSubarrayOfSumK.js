// count all the subarray which sum is equals to target/k

let nums = [1,2,3];
let k = 3;

var subarraySum = function(nums, k) {
    let map = new Map();
    let preSum = 0;
    let ans = 0;
    map.set(0, 1);
    for(let i=0;i<nums.length;i++){
        preSum += nums[i];
        if(map.has(preSum - k)){
            ans = ans + map.get(preSum - k);
        }

        if(map.has(preSum)){
            map.set(preSum, map.get(preSum)+1);
        } else {
            map.set(preSum, 1);
        }
    }

    return ans;
};


let ans = subarraySum(nums, k);

console.log("ans", ans);
