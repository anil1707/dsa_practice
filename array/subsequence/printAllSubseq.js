console.log("subset set/ all subsequence");

let arr = [2, 3, 4];

let subSeq = (arr, ans, temp, i) =>{
    if(i >= arr.length){
        if(temp.length)
            ans.push(temp);
        return;
    }

    // pick the value
    subSeq(arr, ans, [...temp, arr[i]], i+1);

    // not pick the value
    subSeq(arr, ans, [...temp], i+1);
}

let allSubseq = (arr) =>{
    let ans = [];
    subSeq(arr, ans, [], 0);
    return ans;
}

let ans = allSubseq(arr)
console.log("All subsequences is: ", ans);