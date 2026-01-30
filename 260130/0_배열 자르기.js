// 배열 자르기
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120833

function solution(n) {
    var answer = Math.ceil(n/7);
    return answer;
}

// splice 사용
function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2+1);
}