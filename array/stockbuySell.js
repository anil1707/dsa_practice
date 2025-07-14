// stock buy and sell and find maximum profit

// let arr = [7,1,5,3,6,4];
let arr = [7, 6, 5, 4, 3, 2]

const stockBuySell = (arr) =>{
    let profit = 0;
    min = arr[0];
    let minIdx = 0;
    let maxIdx = 0;
    for(let i=1;i<arr.length;i++){
        let cost = arr[i] - min;
        if(cost > profit){
            profit = cost;
            maxIdx = i;
        }
        if(min > arr[i]){
            min = arr[i];
            minIdx = i;
        }
        
    }
    return [minIdx, maxIdx]
}

let ans = stockBuySell(arr)
console.log("prices", arr)
console.log("buy index: ",ans[0],   "and sell index: ", ans[1])