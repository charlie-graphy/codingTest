// 뒤집힌 문자열
// LV.0
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/120822

function solution(my_string) {
    var answer = my_string.split('').reverse().join('');
    return answer;
}

//스프레드 문법?!
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}