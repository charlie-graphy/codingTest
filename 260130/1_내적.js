// 내적
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
    var arr = [];
    for(var i = 0 ; i < a.length ; i++){
        arr.push(a[i]*b[i]);
    }
    var answer = arr.reduce((a,b) => a+b, 0);
    return answer;
}

// 다른 방법
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
// _ 를 넣는 것은 사용하지 않는 인자일 경우 넣는 것