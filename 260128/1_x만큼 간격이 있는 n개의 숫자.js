// x만큼 간격이 있는 n개의 숫자
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
    var answer = [];
    for(var i = 1 ; i <= n ; i++){
        answer[i-1] = x*i;
    }
    return answer;
}

function solution(x, n) {
    var answer = [];
    for(var i = 1 ; i <= n ; i++){
        answer.push(x*i);
    }
    return answer;
}