
let arr = [2,7,11,15]
let target = 9;

const towSum = (arr, target) =>{
    let ans = [];
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(target - arr[i])){
            return [target-arr[i], arr[i]];
        }else{
            map.set(arr[i], i);
        }
    }
    return ans;
}

console.log(towSum(arr, target))