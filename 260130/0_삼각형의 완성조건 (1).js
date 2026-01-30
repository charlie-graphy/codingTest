// 삼각형의 완성조건 (1)
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
    var arr = sides.sort((a, b) => a-b);
    var answer = arr[0] + arr[1] > arr[2] ? 1 : 2;

    return answer;
}