const s1 = "(((){}[]))"
const s2 = "))))((((";
const s3 = "({[}](";


const isValid = (s) =>{
    let stack = [];
    if(s.length % 2 !== 0){
        return false;
    }
    for(let i=0;i<s.length;i++){
        let ch = s[i];
        if(ch === '(' || ch === '[' || ch === '{'){
            stack.push(ch);
        } else{
            let peek = stack[stack.length-1];
            if(
               ( peek === '(' && ch === ')') ||
               (peek === '[' && ch === ']') ||
               (peek === '{' && ch === '}')
            ){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    if(stack.length !=0){
        return false;
    }
    return true;
}

console.log(isValid(s1))
console.log(isValid(s3))
console.log(isValid(s2))