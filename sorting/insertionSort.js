console.log("insertion sort");

let arr = [2, 4, 1, 5, 3];

let i=0;
let j=0;
let small = Infinity;

while(i < arr.length){
    j = i;
    small = i;
    while(j < arr.length){
        if(arr[j] < arr[small]){
            small = j;
        }
        j++;
    }
    let temp = arr[small];
    arr[small] = arr[i];
    arr[i] = temp;
    i++;
}

console.log("Array: ", arr)