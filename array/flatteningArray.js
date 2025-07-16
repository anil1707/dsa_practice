// flattening array

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let ans  = [];
const flat =  (arr) =>{
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            ans.concat(flat(arr[i]));
        } else {
            ans.push(arr[i])
        }
    }
    return ans;
}

console.log(flat(arr))