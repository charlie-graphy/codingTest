// 올바른 괄호
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){    
    const stack = [];
    
    if(s[0] === ')') return false;
    
    for(let c of s){
        c === '(' ? stack.push(c) : stack.pop();
    }
    
    return !stack.length;
}