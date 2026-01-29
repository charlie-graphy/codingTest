// 배열의 평균값
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0)/numbers.length;
    return answer;
}