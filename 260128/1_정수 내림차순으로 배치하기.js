// 정수 내림차순으로 배치하기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    var numberArr, answer = "";
    numberArr = String(n).split('').sort().reverse();
    
    numberArr.forEach(function(v){
       answer+=v;
    });
    return Number(answer);
}

//헉 join이 있었구나
function solution(n) {
    var answer = String(n).split('').sort().reverse().join("");
    
    return Number(answer);
}