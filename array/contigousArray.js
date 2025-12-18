// longest contigous subarray with equl 0 and 1


let arr = [0,1,1,1,1,1,0,0,0]

let contigousArr = (arr) =>{
    let map = new Map();
    let sum = 0;
    let ans = 0;
    map.set(0, -1);
    for(let i=0;i<arr.length;i++){
        arr[i] == 0 ? sum += -1 : sum += 1;
        if(map.has(sum)){
            ans = Math.max(ans, i - map.get(sum));
        }
        map.set(sum, i);
    }
    
    console.log("ans", ans)
}

contigousArr(arr);
