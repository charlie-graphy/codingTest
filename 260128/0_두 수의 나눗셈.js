// 두 수의 나눗셈
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120806

function solution(num1, num2) {
    var answer = Math.trunc(num1/num2*1000);
    //floor 소수점 내림, trunc 소수점 버림
    return answer;
}