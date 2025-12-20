// if array has subarray which length greater that 1 and sum is divisible by k

let nums = [23,2,4,6,7]
let  k = 6
var checkSubarraySum = function(nums, k) {
    let sum=0;
    let remainderMap=new Map();
    remainderMap.set(0,-1)
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        let target=sum%k;
        if(remainderMap.has(target)){
            if(i-remainderMap.get(target)>1){
                return true;
            }
            }else{
                remainderMap.set(target,i)
            }
        }
    
    return false;
};

let ans = checkSubarraySum(nums, k);

console.log("ans", ans)