// 수박수박수박수박수박수?
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    var answer = '수박'.repeat(n/2) + (n%2 == 0 ? '': '수');
    return answer;
}