// find occurances of character in a string

let s = "abcbdacdbba";

// optimal approach
const countCharacter= (s) =>{
    let map = new Map();
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i])+1);
        }else{
            map.set(s[i], 1);
        }
    }

    return map;

}

// brute force approach
const countOccuranceWithLoop = (s) =>{
    let ans = [];
    let visited = [];
    for(let i=0;i<s.length;i++){
        let count = 1;
        for(let j=i+1;j<s.length;j++){
            if(s[i] == s[j]){
                count = count+1;
            }
        }
        if(!visited.includes(s[i]))
            ans.push([s[i],  count])
        visited.push(s[i])
    }
    return ans;

}

console.log(countCharacter(s));
console.log(countOccuranceWithLoop(s));