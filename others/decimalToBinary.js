// decimal to binary conversion

const decimalToBinary = (n) =>{
    let ans = "";
    while(n > 0){
        ans = n%2 + ans;
        n = Math.floor(n/2);
    }
    return ans || "0";
}

console.log(decimalToBinary(10))