// 문자열 내 p와 y의 개수
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    var sLower = s.toLowerCase();
    var pLength = 0;
    var yLength = 0;
    
    for(var i=0; i<sLower.length; i++){
        if(sLower[i] === 'p') pLength++
        if(sLower[i] === 'y') yLength++
    }
    return (pLength === yLength) ? true : false;
    
}

//split 사용
function solution(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}