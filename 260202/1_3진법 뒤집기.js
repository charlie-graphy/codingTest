// 3진법 뒤집기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    var answer = n.toString(3).split('').reverse().join('');
    return parseInt(answer, 3);
}

// n진법 진짜 까먹음.. 이렇게 하는 거였구나