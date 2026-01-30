// 최댓값 만들기 (1)
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
    var arr = numbers.sort((a, b) => b-a);
    var answer = arr[0] * arr[1];
    
    return answer;
}

// 오름차순 : .sort((a, b) => a-b)
// 내림차순 : .sort((a, b) => b-a)

// 깔끔 공식
function solution(numbers) {
    let [a, b] = numbers.sort((a,b) => b - a);
    return a * b;
}