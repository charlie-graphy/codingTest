// 숫자 문자열과 영단어
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    var engArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var answer = s;
    
    engArr.forEach(function(v, i){
        answer = answer.split(v).join(i);
    });
    
    return +answer;
}