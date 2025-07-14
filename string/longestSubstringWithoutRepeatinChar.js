// longest substring without repeating character

let s = "abcabcbb";

const lengthOfLongestSubstring = function(s) {
    let  max = 0;
    let i=0;
    let j=0;
    let  map = new Map();
    while(j<s.length){
        if(map.has(s[j]) && map.get(s[j])>=i){
            i = map.get(s[j])+1;
        }
        max = Math.max(max, j-i+1);
        map.set(s[j], j);
        j++;
    }
    return max;
};

console.log(lengthOfLongestSubstring(s));