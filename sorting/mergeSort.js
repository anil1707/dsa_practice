
console.log("Merge Sort")
let arr = [2, 5, 1, 7, 3, 10, 4];

let mergeTwoArray = (arr, l, mid, r) =>{
    let temp = [];
    let i = l;
    let j = mid+1;

    while(i<=mid && j<=r){
        if(arr[i]<= arr[j]){
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }
    while(i<=mid){
        temp.push(arr[i]);
        i++;
    }
    
    while(j<=r){
        temp.push(arr[j]);
        j++;
    }
    
    for(let i=0;i<temp.length;i++){
        arr[l+i] = temp[i];
    }
}

let mergeSort = (arr, l, r) =>{
    if(l >= r){
        return [arr[l]]
    }
    let mid = Math.floor((l+r)/2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, r);
    mergeTwoArray(arr, l, mid, r);
}
let sortArray = (arr) =>{
    let l = 0;
    let r = arr.length-1;
    mergeSort(arr, 0, arr.length-1)
}

console.log("Array bofore sort: ", arr)
sortArray(arr);

console.log("Array after sort: ", arr)