// 피보나치 수
// LV.2
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
    var fibonacci = [0, 1];
    
    for(var i = 2; i <= n; i++){
        fibonacci[i] = (fibonacci[i-1] + fibonacci[i-2])%1234567;
    }
    
    return fibonacci[n];
}