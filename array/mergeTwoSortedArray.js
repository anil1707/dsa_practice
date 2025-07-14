let arr1 = [1, 4, 5, 9,  20];
let arr2 = [2, 4, 6, 8 ];

const mergeTowSortedArray = (arr1, arr2) =>{
    let ans = [];
    let i=0;
    let j=0;
    let n1 = arr1.length;
    let n2 = arr2.length;
    while(i<n1 && j<n2){
        if(arr1[i]<=arr2[j]){
            ans.push(arr1[i]);
            i++;
        }else{
            ans.push(arr2[j])
            j++;
        }
    }

    while(i<n1){
        ans.push(arr1[i]);
        i++;
    }
    while(j<n2){
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}

console.log("Merged Array: ", mergeTowSortedArray(arr1, arr2));