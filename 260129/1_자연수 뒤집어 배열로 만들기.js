// 자연수 뒤집어 배열로 만들기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    var answer = String(n).split('').reverse().map(Number);
    return answer;
}