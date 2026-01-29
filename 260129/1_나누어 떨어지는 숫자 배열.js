// 나누어 떨어지는 숫자 배열
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach(function(v){
        if(!(v%divisor)) answer.push(v);
    });
    
    if(answer == 0) answer.push(-1);
    
    return answer.sort(function(x,y){return x-y});
}

//filter기능 만족하는 조건으로 새 배열 만들어줌
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}