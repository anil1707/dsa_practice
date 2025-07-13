// Remove Duplicates from Sorted Array
let arr = [0,0,1,1,1,2,2,3,3,4];
// ans will be 5 in this case

const removeDuplicate = (arr) =>{
    let i=0;
    let j=0;
    while(j<=arr.length){
        if(arr[i] !== arr[j] && i!==j){
            i++;
            arr[i] = arr[j];
            j--;
        }
        j++;
    }
    return i;
}

console.log(removeDuplicate(arr));