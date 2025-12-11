console.log("Quick sort")
let arr = [3, 1, 4, 2, 5, 6, 9, 7];

let partition = (arr, low, high) =>{
    let i=low;
    let j = high;
    let pivot = arr[low];
    
    while(i<j){
        while(arr[i] < pivot)i++;
        while(arr[j] > pivot)j--;
        console.log(i, j)
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    console.log(i, j)
    let temp = arr[j];
    arr[j] = pivot;
    arr[j] = temp;
    return j;
    
}

let qs = (arr, low, high) =>{
    if(low<high){
        let partitionIndex = partition(arr, low, high);
        console.log("IN qs", partitionIndex, low, high)
        qs(arr, low, partitionIndex-1);
        qs(arr, partitionIndex+1, high);
    }
}
let quickSort = (arr) =>{
    qs(arr, 0, arr.length-1);
    console.log("Arr: ", arr);
}

quickSort(arr);