// 음양 더하기
// LV.1
// URL : https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    var answer = 0;
    
    for(var i = 0 ; i < absolutes.length ; i++){
        if(signs[i]) answer+=absolutes[i];
        else answer-=absolutes[i];
    }
    
    return answer;
}

//reduce는 언제나 신기하다..
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}