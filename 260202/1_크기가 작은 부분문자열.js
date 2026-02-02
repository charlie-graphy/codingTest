// 크기가 작은 부분문자열
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
    var answer = 0;
    
    for(var i = 0 ; i+p.length <= t.length ; i++){
        const tNum = parseInt(t.substr(i, p.length));
        console.log(tNum)
        if(tNum <= parseInt(p)) answer++;
    }
    return answer;
}