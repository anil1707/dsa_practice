console.log("Bubble Sort")

let arr = [2, 5, 1, 6, 10, 3, 12, 7];

// what exactly bubble sort do?
// in all pass move largest item at its correct position

for(let i=arr.length-1;i>=0;i--){
    for(let j=0; j<i;j++){
        if(arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp;
        }
    }
}

console.log("Array: ",arr)