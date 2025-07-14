// decimal to hexa decimal conversion

const decimalToHexadecimal = (n) =>{
    let hexChars = "123456789ABCDEF";
    let ans = "";
    while(n>0){
        ans = hexChars[n%16] +ans;
        n = Math.floor(n/16);
    }
    return ans || "0"
}

console.log(decimalToHexadecimal(10))