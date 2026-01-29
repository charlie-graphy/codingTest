// 두 정수 사이의 합
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    var answer = 0;
    const min = a > b ? b : a;
    const max = a > b ? a : b;
    
    for(var i = min ; i <= max ; i++ ) answer+=i;
    
    return answer;
}

//Math.min과 Math.max 사용
function solution(a, b) {
    var answer = 0;
    
    for(var i = Math.min(a,b) ; i <= Math.max(a,b) ; i++ ) answer+=i;
    
    return answer;
}