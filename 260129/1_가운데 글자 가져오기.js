// 가운데 글자 가져오기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    if(s.length%2 === 0) return s.substr(s.length/2-1,2);
    else return s.substr(s.length/2,1);
}