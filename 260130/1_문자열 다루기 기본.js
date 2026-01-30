// 문자열 다루기 기본
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    var answer = true;
   
    if(!(s.length == 4 || s.length == 6)) return false;
    if(s.replaceAll(/[^0-9]/g,'*').indexOf('*') > -1) return false;
    
    return answer;
}

// 이렇게도 되겠당
function solution(s) {
    var answer = true;
   
    if(!(s.length == 4 || s.length == 6)) return false;
    if(s != parseInt(s)) return false;
    
    return answer;
}