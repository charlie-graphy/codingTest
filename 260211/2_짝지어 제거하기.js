// 짝지어 제거하기
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s)
{
    var stack = [];
    
    for(var i = 0 ; i < s.length ; i++){
        if(stack[stack.length-1] === s[i]) stack.pop();
        else stack.push(s[i]);
    }

    return !stack.length ? 1 : 0;
}