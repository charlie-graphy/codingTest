// 양꼬치
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
    var answer = (n*12000)+(k*2000);
    var service = Math.trunc(n/10);
    answer -= (2000*service);
    return answer;
}