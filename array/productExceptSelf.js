nums = [1,2,3,4]

productExceptSelf = function (nums) {
    let mul = 1;
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            mul *= nums[i];
        } else{
            zeroCount++;
        }
    }

    if(zeroCount > 1){
        return Array(nums.length).fill(0);
    }

    let ans = [];

    if(zeroCount == 1){
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] !== 0){
                ans.push(0);
            }else{
                ans.push(mul);
            }
        }
    } else {
        for(let i=0;i<nums.length;i++){
            ans.push(mul/nums[[i]]);
        }
    }

    return ans;
    
};

console.log(productExceptSelf(nums));