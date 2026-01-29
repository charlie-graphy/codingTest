// 정수 제곱근 판별
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    var answer = -1;
    if(Number.isInteger(Math.sqrt(n))){
        answer = Math.pow(Math.sqrt(n)+1,2);
    }
    return answer;
}