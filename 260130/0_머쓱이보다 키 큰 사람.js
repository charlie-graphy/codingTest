// 머쓱이보다 키 큰 사람
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
    var answer = array.filter(v => v > height).length;
    return answer;
}